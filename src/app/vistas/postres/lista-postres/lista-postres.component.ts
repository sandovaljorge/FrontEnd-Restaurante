import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-lista-postres',
  templateUrl: './lista-postres.component.html',
  styleUrls: ['./lista-postres.component.css']
})
export class ListaPostresComponent implements OnInit {

  @Input() imagenPostresDevolucion: Imagen | any;
  constructor() { }

  ngOnInit(): void {
  }

}
