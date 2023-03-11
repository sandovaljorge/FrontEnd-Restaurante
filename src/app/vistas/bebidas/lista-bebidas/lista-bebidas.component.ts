import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-lista-bebidas',
  templateUrl: './lista-bebidas.component.html',
  styleUrls: ['./lista-bebidas.component.css']
})
export class ListaBebidasComponent implements OnInit {

  @Input() imagenBebidasDevolucion: Imagen | any;
  constructor() { }

  ngOnInit(): void {
  }

}
