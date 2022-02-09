import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecaPage } from './biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaPage
  },
  {
    path: 'detalle',
    loadChildren: () => import('../detalle/detalle.module').then( m => m.DetalleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaPageRoutingModule {}
