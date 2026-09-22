export interface IProduct {
  Id: number;
  Name: string;
  Email: number;
  Age: string;
  Image: string;
}
export interface ICustomerCategory {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: IProduct[];
}
