import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
    forms = new FormGroup({
    nombre : new FormControl('',[Validators.required]),
    password : new  FormControl('',[Validators.required]),
  })

  constructor( private formBuilder:FormBuilder) { }
       
  obtenerError(){
    var nom=this.forms.get('nombre');
    var pass=this.forms.get('password');
    if(nom?.hasError('required')){
      return 'El campo nombre es requerido'
    }
  }
    guardarUsuario(){
      console.log('Registro Guardado');
    }

  

  ngOnInit(): void {
  }

}

