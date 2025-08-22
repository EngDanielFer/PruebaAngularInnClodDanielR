import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  }, 
  {
    path: 'proyectos',
    loadChildren: () => import('./proyectos/proyectos.module').then( m => m.ProyectosModule ),
    canActivate: [AuthGuard]
  },
  {
    path: 'tareas/:id',
    loadChildren: () => import('./tareas/tareas.module').then( m => m.TareasModule ),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
