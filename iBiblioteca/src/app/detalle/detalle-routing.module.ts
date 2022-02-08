import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path: ':isbn',
    component: DetalleComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePageRoutingModule {}