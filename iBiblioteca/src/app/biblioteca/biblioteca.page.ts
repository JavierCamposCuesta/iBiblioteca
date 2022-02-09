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

  searchTerm = '';
  looking = false;
  libros:LibroInterface[]= [];
  constructor(private navCtrl: NavController, private bibliotecaService: BibliotecaService) { }
  
  ngOnInit() {
  }

  getLibros(event){
    const valor: string = event.detail.value;
    this.bibliotecaService.getBooks(valor).subscribe(datos =>{
      this.libros = datos.docs;
    })
  }


  irAtras() {
    this.navCtrl.back();
  }


}
