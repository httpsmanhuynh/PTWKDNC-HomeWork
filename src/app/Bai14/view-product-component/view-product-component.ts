import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-view-product-component',
  standalone: false,
  styleUrl: './view-product-component.css',
  templateUrl: './view-product-component.html',
})
export class ViewProductComponent implements OnInit {
  // Đổi tên biến thành categories vì service trả về danh mục
  public categories: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    // Gọi dữ liệu từ service khi component khởi tạo
    this.categories = this.catalogService.getCategories();
  }
}
