import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  exports:[
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
