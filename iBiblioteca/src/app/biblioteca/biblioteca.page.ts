import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BibliotecaService } from './biblioteca.service';
import { LibrosInterface } from './libros.interface';
import { LibroInterface } from './libros.interface';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  libros:LibroInterface[]= [];
  constructor(private navCtrl: NavController, private bibliotecaService: BibliotecaService) { }

  ngOnInit() {
    this.getLibros();
  }

  getLibros(){
    this.bibliotecaService.getLibros().subscribe(datos =>{
      this.libros = datos.docs;
    })
  }


  irAtras() {
    this.navCtrl.back();
  }


}
