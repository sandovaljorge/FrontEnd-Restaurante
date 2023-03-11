import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-lista-menu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.css']
})
export class ListaMenuComponent implements OnInit {

  @Input() imagenMenusDevolucion: Imagen | any;
  constructor() { }

  ngOnInit(): void {
  }

}
