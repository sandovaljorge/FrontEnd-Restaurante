import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutasVistasModule } from './rutas-vistas.module';
import { HomeComponent } from './home/home.component';
import { FiestasPrivadasComponent } from './fiestas-privadas/fiestas-privadas.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { DatabaseService } from '../servicios/database.service';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { ListaBebidasComponent } from './bebidas/lista-bebidas/lista-bebidas.component';
import { ListaMenuComponent } from './menu/lista-menu/lista-menu.component';
import { ListaPostresComponent } from './postres/lista-postres/lista-postres.component';


@NgModule({
  declarations: [
    HomeComponent,
    FiestasPrivadasComponent,
    ReservacionComponent,
    UbicacionComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    BebidasComponent,
    PostresComponent,
    ListaBebidasComponent,
    ListaMenuComponent,
    ListaPostresComponent
  ],
  exports: [
    HomeComponent, 
    FiestasPrivadasComponent,
    ReservacionComponent,
    UbicacionComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    BebidasComponent,
    PostresComponent,
    ListaBebidasComponent,
    ListaMenuComponent,
    ListaPostresComponent
  ],
  imports: [
    CommonModule, 
    RutasVistasModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseService]
})
export class VistasModule { }
