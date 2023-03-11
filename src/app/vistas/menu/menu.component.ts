import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagenMenus : Imagen[] = [
    new Imagen("1", "Carne azada termino 3/4", "Parrilladas", "Q150.00", "../assets/images/menus/azado1.jpg"),
    new Imagen("2", "Carne adobada", "Parrilladas", "Q140.00", "../assets/images/menus/azado2.jpg"),
    new Imagen("3", "Chicharrones en salsa", "Parrilladas", "Q200.00", "../assets/images/menus/azado4.jpg"),
    new Imagen("4", "Costilla azada", "Parrilladas", "Q190.00", "../assets/images/menus/azado5.jpg"),
    new Imagen("5", "Carne azada termino 1/2", "Parrilladas", "Q170.00", "../assets/images/menus/azado6.jpg"),
    new Imagen("6", "Desayuno tradicional", "Desayunos", "Q90.00", "../assets/images/menus/desayuno1.jpg"),
    new Imagen("7", "Desayuno tipico", "Desayunos", "Q70.00", "../assets/images/menus/desayuno2.jpg"),
    new Imagen("8", "Desayuno mexicano", "Desayunos", "Q100.00", "../assets/images/menus/desayuno4.jpg"),
    new Imagen("9", "Desayuno tipico mexicano", "Desayunos", "Q80.00", "../assets/images/menus/desayuno5.jpg"),
    new Imagen("10", "Desayuno tradicional chapin", "Desayunos", "Q90.00", "../assets/images/menus/desayuno6.jpg"),
    new Imagen("11", "Papas fritas", "Snacks", "Q70.00", "../assets/images/menus/platillo1.png"),
    new Imagen("12", "Ensalada vegetariana", "Snacks", "Q90.00", "../assets/images/menus/platillo2.jpeg"),
    new Imagen("13", "Ensalada nutricional", "Snacks", "Q90.00", "../assets/images/menus/platillo3.jpg"),
    new Imagen("14", "Alitas fritas", "Snacks", "Q120.00", "../assets/images/menus/platillo4.jpeg"),
    new Imagen("15", "Dobladas de pure de papa", "Snacks", "Q100.00", "../assets/images/menus/platillo5.jpeg"),
    new Imagen("16", "Elotes con Mayonesa", "Snacks", "Q130.00", "../assets/images/menus/platillo6.jpg"),
    new Imagen("17", "Tamal tradicional chapin", "Tradicional", "Q70.00", "../assets/images/menus/tipico_gt1.jpg"),
    new Imagen("18", "Tamalitos de chipilin", "Tradicional", "Q50.00", "../assets/images/menus/tipico_gt2.jpg"),
    new Imagen("19", "Gallina en salsa roja", "Tradicional", "Q150.00", "../assets/images/menus/tipico_gt3.jpg"),
    new Imagen("20", "Pepian cobanero", "Tradicional", "Q180.00", "../assets/images/menus/tipico_gt4.jpg"),
    new Imagen("21", "Kak´ik cobanero", "Tradicional", "Q170.00", "../assets/images/menus/tipico_gt5.jpg"),
    new Imagen("22", "Fiambre tradicional", "Tradicional", "Q300.00", "../assets/images/menus/tipico_gt6.jpg"),
  ]
}
