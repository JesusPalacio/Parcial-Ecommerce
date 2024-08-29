import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from 'src/app/pages/cart/cart-routing.module';

import { CartPage } from 'src/app/pages/cart/cart.page';

import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule
  ],
  declarations: [CartPage, CartItemComponent]
})
export class CartPageModule {}
