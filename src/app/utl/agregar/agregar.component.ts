import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlumnosUtl } from '../Interface/utl.interface';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  
  @Input() alumnosUtl:AlumnosUtl[]=[];
   @Input() regAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  } 
  @Output()onNuevoAlumnos:EventEmitter<AlumnosUtl>=new EventEmitter();

  constructor( private UtlService:UtlService) { }
  
  agregar(){
    //console.log(this.alumnosUtl);
    /* this.alumnosUtl.push(this.regAlumno); */
    /* this.onNuevoAlumnos.emit(this.regAlumno); */
    this.UtlService.agregarAlumno(this.regAlumno);
    this.UtlService.mostrarSaludo();
    this.regAlumno={
      nombre:'',
      edad:0
    }
  }

}
