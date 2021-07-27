import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  datosCompraForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required,Validators.minLength(3) ]],
    apellido: ['', [Validators.required,Validators.minLength(3) ]],
    telefono: ['',[Validators.required,Validators.minLength(3) ]],
    correo: ['',[Validators.required,Validators.email ]],
    tcredito: ['',[Validators.required, Validators.minLength(16)]],
    fechaexpiracion: ['',[]],
    verificacion: ['',[Validators.required,Validators.minLength(3)]],
    terminos: [true,[Validators.required]]
  })

  constructor(private checkoutService: CheckoutService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  revisarCampoValido(campo: string){
    return this.datosCompraForm.controls[campo].errors
          && this.datosCompraForm.controls[campo].touched;

  }

  agendar(){

    if(this.datosCompraForm.invalid){
      this.datosCompraForm.markAllAsTouched();
      return;
    }

    console.log(this.datosCompraForm.value);
    this.datosCompraForm.reset();
  }

}
