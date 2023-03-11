import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagenPostres : Imagen[] = [
    new Imagen("1", "Pastel de queso, canela y galleta", "Pastel", "Q80.00", "../assets/images/postres/postre1.jpg"),
    new Imagen("2", "Pastel chocolate", "Pastel", "Q100.00", "../assets/images/postres/postre2.jpg"),
    new Imagen("3", "Pastel de fresa y crema", "Pastel", "Q90.00", "../assets/images/postres/postre3.jpg"),
    new Imagen("4", "Pastel de flam de piña", "Pastel", "Q100.00", "../assets/images/postres/postre4.jpg"),
    new Imagen("5", "Pastel de piña-naranja", "Pastel", "Q70.00", "../assets/images/postres/postre6.jpg"),
    new Imagen("6", "Pastel de fresa con crema", "Pastel", "Q80.00", "../assets/images/postres/postre7.jpg"),
    new Imagen("7", "Canelones de pan con chocolate", "Pastel", "Q60.00", "../assets/images/postres/postre8.jpg"),
    new Imagen("8", "Helado de chocolate con fresas", "Helado", "Q40.00", "../assets/images/postres/postre11.jpg"),
    new Imagen("9", "Helado de de vainilla y galleta", "Helado", "Q35.00", "../assets/images/postres/postre12.jpg"),
  ]
}
