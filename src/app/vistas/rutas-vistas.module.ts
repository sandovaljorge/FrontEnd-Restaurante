import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FiestasPrivadasComponent } from './fiestas-privadas/fiestas-privadas.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';

const rutas: Routes =[
  {
    path: "",
    children:[
      {path: "home", component:HomeComponent},
      {path: "fiestas-privadas", component:FiestasPrivadasComponent},
      {path: "ubicacion", component:UbicacionComponent},
      {path: "reservacion", component:ReservacionComponent},
      {path: "contacto", component:ContactoComponent},
      {path: "login", component:LoginComponent},
      {path: "registro", component:RegistroComponent},
      {path: "menu", component:MenuComponent},
      {path: "bebidas", component:BebidasComponent},
      {path: "postres", component:PostresComponent},
      //{path: "lista-bebidas", component:ListaBebidasComponent},
      {path: "**", redirectTo: "home"}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(rutas)
  ]
})
export class RutasVistasModule { }
