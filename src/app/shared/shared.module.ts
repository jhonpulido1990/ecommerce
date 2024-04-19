import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Banner2Component } from './banner2/banner2.component';
import { ProductsComponent } from './products/products.component';
import { CardProductComponent } from './card-product/card-product.component';



@NgModule({
  declarations: [
    CardComponent,
    Banner2Component,
    ProductsComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    Banner2Component,
    ProductsComponent
  ]
})
export class SharedModule { }