import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  template: `
    <ion-item>
      <ion-thumbnail slot="start">
        <img [src]="item.image" alt="{{ item.title }}"/>
      </ion-thumbnail>
      <ion-label>
        <h2>{{ item.title }}</h2>
        <p>{{ item.price | currency:'USD' }}</p>
      </ion-label>
      <ion-button (click)="onRemove.emit(item)" color="danger" slot="end" fill="clear">
        <ion-icon name="trash" aria-label="Remove item"></ion-icon>
      </ion-button>
    </ion-item>
  `
})
export class CartItemComponent {
  @Input() item: any;
  @Output() onRemove = new EventEmitter<any>();
}