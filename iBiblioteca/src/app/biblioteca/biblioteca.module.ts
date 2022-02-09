import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';
import { HttpClientModule } from '@angular/common/http';

import { BibliotecaService } from './biblioteca.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BibliotecaPage],
  providers:[BibliotecaService]
})
export class BibliotecaPageModule {}
