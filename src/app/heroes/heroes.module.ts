import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponet } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ListadoComponent,
    HeroeComponet
  ],
  exports: [
    ListadoComponent
  ],
  imports:[
    CommonModule
  ]

})
export class HeroesModule{

}
