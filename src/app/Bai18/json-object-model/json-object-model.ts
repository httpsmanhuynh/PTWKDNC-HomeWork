import { Component } from '@angular/core';
import { ProductHttpService } from '../service/product-http-service';
@Component({
  selector: 'app-json-object-model',
  standalone: false,
  styleUrl: './json-object-model.css',
  templateUrl: './json-object-model.html',
})
export class JsonObjectModel {
  public customers: any[] = [];
  constructor(private _service: ProductHttpService) {
    this._service.getProducts().subscribe({
      next: (data) => {
        this.customers = data;
      },
    });
  }
}
