import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
    <ion-card [routerLink]="['/product', product.id]">
      <img [src]="product.image" alt="{{ product.title }}">
      <ion-card-header>
        <ion-card-title>{{ product.title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>{{ product.price | currency:'USD' }}</p>
      </ion-card-content>
    </ion-card>
  `,
  styles: [`
    ion-card { height: 100%; display: flex; flex-direction: column; }
    img { object-fit: contain; height: 200px; width: 100%; }
  `]
})
export class ProductCardComponent {
  @Input() product: any;
}