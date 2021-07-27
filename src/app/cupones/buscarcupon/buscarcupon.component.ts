import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buscarcupon',
  templateUrl: './buscarcupon.component.html',
  styleUrls: ['./buscarcupon.component.css']
})
export class BuscarcuponComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscarZonaoCategoria(zonaCategoria:NgForm){
    console.log(zonaCategoria.value);
  }

  descuento(){
    console.log("Buscar descuento");
  }

}
