import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CuponesComponent } from './cupones.component';
import { BuscarcuponComponent } from './buscarcupon/buscarcupon.component';
import { MostrarcuponesComponent } from './mostrarcupones/mostrarcupones.component';

@NgModule({
  declarations: [
    CuponesComponent,
    BuscarcuponComponent,
    MostrarcuponesComponent
  ],
  exports:[
    CuponesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CuponesModule { }
