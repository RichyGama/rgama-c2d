import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiosComponent } from './beneficios.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ComofuncionaComponent } from './comofunciona/comofunciona.component';
import { CuponesComponent } from './cupones/cupones.component';
import { MarcasComponent } from './marcas/marcas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';



@NgModule({
  declarations: [
    BeneficiosComponent,
    BusquedaComponent,
    ComofuncionaComponent,
    CuponesComponent,
    MarcasComponent,
    EstadisticasComponent
  ],
  exports:[
    BeneficiosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BeneficiosModule { }
