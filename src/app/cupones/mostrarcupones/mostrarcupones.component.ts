import { Component, OnInit } from '@angular/core';

interface Usuario {
  nombre: string;
  cupones: Cupon[];
}

interface Cupon {
  id: number;
  nombre: string;
}




@Component({
  selector: 'app-mostrarcupones',
  templateUrl: './mostrarcupones.component.html',
  styleUrls: ['./mostrarcupones.component.css']
})
export class MostrarcuponesComponent implements OnInit {

  usuario: Usuario = {
    nombre: 'Ricardo',
    cupones: [{
      id: 1,
      nombre: 'azap'
    },
    {
      id: 2,
      nombre: 'kfc'
    },
    {
      id: 3,
      nombre: 'optica'
    },
    {
      id: 4,
      nombre: 'ADO'
    },
    {
      id: 5,
      nombre: 'pizza'
    }
    ]
  }


  constructor() { }

  ngOnInit(): void {
  }

}
