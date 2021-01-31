import { Component} from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

 heroes:string[] = ['Thor','Batman','Robin','MrRobot','Wazon'];

  elementoBorrado:string[] = [];




 borrarHeroe(){
 this.elementoBorrado = this.heroes.splice(0,1);


 }



}
