import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../Interface/utl.interface';


@Injectable({
providedIn: 'root'
})
export class UtlService {

constructor() {}

mostrarSaludo(){
console.log('Hola mundo');
}
private _alumnosUtl:AlumnosUtl[]=[
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
];
get alumnosUtl():AlumnosUtl[]{
return [...this._alumnosUtl];
}

agregarAlumno(alumno:AlumnosUtl){
    this._alumnosUtl.push(alumno);
}
}
