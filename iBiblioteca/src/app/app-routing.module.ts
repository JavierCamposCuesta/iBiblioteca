import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'autor',
    loadChildren: () => import('./autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  },
  {
    path: 'biblioteca',
    loadChildren: () => import('./biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetalleModule)
  },
  
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
