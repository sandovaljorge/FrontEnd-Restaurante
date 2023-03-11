import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagenBebidas : Imagen[] = [
    new Imagen("1", "Licuado de fresas", "Bebidas", "Q15.00", "../assets/images/bebidas/licuado_fresas.jpg"),
    new Imagen("2", "Licuado de banano", "Bebidas", "Q15.00", "../assets/images/bebidas/licuado_banano.jpg"),
    new Imagen("3", "Licuado de mora", "Bebidas", "Q15.00", "../assets/images/bebidas/licuado_mora.jpeg"),
    new Imagen("5", "Licuado de papaya", "Bebidas", "Q15.00", "../assets/images/bebidas/licuado_papaya.jpg"),
    new Imagen("6", "Licuado de mango", "Bebidas", "Q15.00", "../assets/images/bebidas/licuado_mango.jpg"),
    new Imagen("7", "Cerveza Gallo", "Licores", "Q30.00", "../assets/images/bebidas/cerveza_gallo_botella.jpg"),
    new Imagen("8", "Cerveza Corona", "Licores", "Q30.00", "../assets/images/bebidas/cerveza_corona.jpg"),
    new Imagen("9", "Cerveza Modelo", "Licores", "Q30.00", "../assets/images/bebidas/cerveza_modelo.jpg"),
    new Imagen("10", "Tequila Jóse Cuervo", "Licores", "Q250.00", "../assets/images/bebidas/tequila_jose_cuervo.jpg"),
    new Imagen("11", "Whisky Jack Daniels Honey", "Licores", "Q275.00", "../assets/images/bebidas/whiskey_jack_daniels_honey.jpg"),
    new Imagen("12", "Whisky Jack Daniels", "Licores", "Q250.00", "../assets/images/bebidas/whiskey_jack_daniels.jpg"),
    new Imagen("13", "Whisky Jhonnie Walker Black", "Licores", "Q400.00", "../assets/images/bebidas/whiskey_johnnie_walker_black.jpg"),
    new Imagen("14", "Whisky Jhonnie Walker", "Licores", "Q300.00", "../assets/images/bebidas/whiskey_johnnie_walker.png"),
    new Imagen("15", "Ron Zacapa", "Licores", "Q900.00", "../assets/images/bebidas/ron_zacapa.jpg"),
    new Imagen("16", "Ron Botran", "Licores", "Q500.00", "../assets/images/bebidas/ron_botran.jpeg"),
  ]
}
