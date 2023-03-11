import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /*createFormGroup(){
    return new FormGroup({
      usuario: new FormControl(''),
      email: new FormControl(''),
      pass: new FormControl('')
    });
  }*/

  formularioUsuario: FormGroup | any;

  constructor(private databaseService: DatabaseService, private formB: FormBuilder) {
    //this.formularioUsuario = this.createFormGroup();
    this.construirFormulario();
   }

  ngOnInit(): void {
  }

  resetearFormulario(){
    this.formularioUsuario.reset();
  }

  pruebaButton(){
    console.log("execute");
  }
  guardarFormulario(){
    console.log("Guardado", this.formularioUsuario.value);
    if(this.formularioUsuario.valid){
      this.databaseService.guardarDatos(this.formularioUsuario.value);
      this.resetearFormulario();
    }
    else{
      console.log("Formulario no valido");
    }
    //this.databaseService.guardarDatos(this.formularioUsuario.value);
  }

  expresionRegular = 
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  private construirFormulario(){
    this.formularioUsuario = this.formB.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      direccion: ['', [Validators.required, Validators.minLength(7)]],
      usuario: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.expresionRegular)]],
      pass: ['', Validators.required]
    });
  }
}
