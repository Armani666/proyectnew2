import { Component, OnInit } from '@angular/core';

interface AlumnosUtl{
  nombre:string;
  edad:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

/*<li>Ulises - 21</li>
  <li>Ramses - 23</li>*/

alumnosUtl:AlumnosUtl[]=[
  {
  nombre:'Mario',
  edad:30,
  },
  {
    nombre:'ramses',
    edad:23,
  },
  {
    nombre:'Ulises',
    edad:21,
  },
]

regAlumno:AlumnosUtl={
  nombre:'',
  edad:0
}

agregar(){
  //console.log(this.alumnosUtl);
  this.alumnosUtl.push(this.regAlumno);
  this.regAlumno={
    nombre:'',
    edad:0
  }
}
limpiar(){
  this.alumnosUtl=[];
}


}