const express = require("express");
const app = express();
const port = 4000;

const morgan = require("morgan");
app.use(morgan("combined"));

const path = require("path");
const fs = require("fs");
app.use(express.static(path.join(__dirname, "public")));

const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.listen(port, () => {
  console.log(`My Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("This Web server is processed for MongoDB");
});
const { MongoClient, ObjectId } = require("mongodb");
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");

async function ensureFashionIds() {
  const docs = await fashionCollection.find({}).sort({ idF: -1 }).toArray();
  let nextId = 1;

  for (const doc of docs) {
    const currentId = Number(doc.idF);
    if (doc.idF == null || Number.isNaN(currentId)) {
      await fashionCollection.updateOne(
        { _id: doc._id },
        { $set: { idF: nextId } },
      );
      nextId += 1;
    } else {
      nextId = Math.max(nextId, currentId + 1);
    }
  }
}

// GET all fashions, optional style filter, sorted by createdAt desc
app.get("/fashions", cors(), async (req, res) => {
  await ensureFashionIds();
  const { style } = req.query;
  const filter = style ? { style } : {};
  const result = await fashionCollection
    .find(filter)
    .sort({ createdAt: -1 })
    .toArray();
  res.send(result);
});

// GET fashion by id or numeric idF
app.get("/fashions/:id", cors(), async (req, res) => {
  const input = req.params["id"];

  if (ObjectId.isValid(input) && input.length === 24) {
    const o_id = new ObjectId(input);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    return res.send(result[0]);
  }

  const slugMatch = String(input).match(/-f(\d+)$/i);
  const numericIdFromSlug = slugMatch ? Number(slugMatch[1]) : NaN;
  const numericId = Number(input);
  const finalId = Number.isNaN(numericId) ? numericIdFromSlug : numericId;

  if (!Number.isNaN(finalId)) {
    const result = await fashionCollection.find({ idF: finalId }).toArray();
    return res.send(result[0] || null);
  }

  return res.send(null);
});

// CREATE new fashion (adds createdAt and auto idF if missing)
app.post("/fashions", cors(), async (req, res) => {
  const fashion = req.body;
  if (!fashion.createdAt) fashion.createdAt = new Date();
  // generate numeric idF if not provided
  if (fashion.idF == null) {
    // simple auto‑increment based on max existing idF
    const maxDoc = await fashionCollection
      .find()
      .sort({ idF: -1 })
      .limit(1)
      .toArray();
    const nextId = maxDoc.length ? (maxDoc[0].idF || 0) + 1 : 1;
    fashion.idF = nextId;
  }
  await fashionCollection.insertOne(fashion);
  res.send(fashion);
});

// UPDATE existing fashion
app.put("/fashions", cors(), async (req, res) => {
  // update json Fashion into database
  await fashionCollection.updateOne(
    { _id: new ObjectId(req.body._id) }, //condition for update
    {
      $set: {
        //Field for updating
        style: req.body.style,
        fashion_subject: req.body.fashion_subject,
        fashion_detail: req.body.fashion_detail,
        fashion_image: req.body.fashion_image,
        // preserve idF and createdAt if provided
        idF: req.body.idF,
        createdAt: req.body.createdAt
          ? new Date(req.body.createdAt)
          : new Date(),
      },
    },
  );
  //send Fashion after updating
  var o_id = new ObjectId(req.body._id);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});

// DELETE fashion by id
app.delete("/fashions/:id", cors(), async (req, res) => {
  //find detail Fashion with id
  var o_id = new ObjectId(req.params["id"]);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  //update json Fashion into database
  await fashionCollection.deleteOne({ _id: o_id });
  //send Fashion after remove
  res.send(result[0]);
});
