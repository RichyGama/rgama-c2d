import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutModule } from './checkout/checkout.module';
import { CuponesComponent } from './cupones/cupones.component';
import { CuponesModule } from './cupones/cupones.module';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { BeneficiosModule } from './beneficios/beneficios.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CheckoutModule,
    CuponesModule,
    BeneficiosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
