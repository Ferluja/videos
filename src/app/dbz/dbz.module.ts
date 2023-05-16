import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPagesComponent,
    ListComponent,
    PersonajesComponent
  ],
  exports:[
    MainPagesComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class DbzModule { }
