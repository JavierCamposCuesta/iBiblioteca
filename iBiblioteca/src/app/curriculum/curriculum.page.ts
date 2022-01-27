import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Experiencias } from './experiencia.interface';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {


  //Las experiencias las meteremos en esta lista, que luego se mostrará en el html
private listaExperiencia: Experiencias[] = [
  {fecha:"2020 - Actualidad", descripcion:"Estudiante de grado superior - Desarrollo de aplicaciones web"},
  {fecha:"Nov 2019 - May 2020", descripcion:"Mozo de almacen en grupo Hemanos Fernández"},
  {fecha:"Sep 2017 - May 2019", descripcion:"Estudiante de grado superior - Administración y finanzas"},

]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  getListaExperiencia(){
    return[...this.listaExperiencia]
  }

  irAtras() {
    this.navCtrl.back();
  }
 
}
