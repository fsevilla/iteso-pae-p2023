import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  formRegistro: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formRegistro = formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: '',
      confirm: '',
      aceptar: [false, Validators.requiredTrue]
    });
  }

}
