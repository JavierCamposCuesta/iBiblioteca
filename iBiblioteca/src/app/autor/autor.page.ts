import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irAtras() {
    this.navCtrl.back();
  }

}
