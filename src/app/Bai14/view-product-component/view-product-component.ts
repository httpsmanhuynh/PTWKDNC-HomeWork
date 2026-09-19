import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-view-product-component',
  standalone: false,
  styleUrl: './view-product-component.css',
  templateUrl: './view-product-component.html',
})
export class ViewProductComponent implements OnInit {
  public categories: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
