import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';
import { HttpClientModule } from '@angular/common/http';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TablaComponent } from './tabla/tabla.component';

import { BibliotecaService } from './biblioteca.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BibliotecaPage, BusquedaComponent, TablaComponent],
  providers:[BibliotecaService]
})
export class BibliotecaPageModule {}
