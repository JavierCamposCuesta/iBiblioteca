import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DetallePageRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle/detalle.component';
import { BibliotecaService } from '../biblioteca/biblioteca.service';



@NgModule({
  declarations: [DetalleComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    DetallePageRoutingModule
  ],
  exports:[DetalleComponent],
  providers:[BibliotecaService]
})
export class DetalleModule { }
