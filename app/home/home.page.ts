import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.apiService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  loadCategories() {
    this.apiService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  onCategoryChange() {
    if (this.selectedCategory) {
      this.apiService.getProductsByCategory(this.selectedCategory).subscribe(
        (data) => {
          this.products = data;
        },
        (error) => {
          console.error('Error fetching products by category', error);
        }
      );
    } else {
      this.loadProducts();
    }
  }
}