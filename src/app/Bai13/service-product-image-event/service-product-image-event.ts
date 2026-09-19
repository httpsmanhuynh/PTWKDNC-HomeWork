import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.html',
  styleUrl: './service-product-image-event.css',
})
export class ServiceProductImageEvent implements OnInit {
  public products: any[] = [];

  constructor(
    private pservice: ProductService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.products = this.pservice.getProductsWithImages();
  }

  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.ProductId]);
  }
}
