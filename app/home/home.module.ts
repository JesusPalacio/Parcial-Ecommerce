import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from 'src/app/home/home-routing.module';

import { HomePage } from 'src/app/home/home.page';

import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ProductCardComponent]
})
export class HomePageModule {}
