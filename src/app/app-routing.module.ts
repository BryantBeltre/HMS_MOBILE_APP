import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./views/appointments/appointments.module').then( m => m.AppointmentsPageModule)
  },
  {
    path: 'addappointments',
    loadChildren: () => import('./views/addappointments/addappointments.module').then( m => m.AddappointmentsPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./views/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./views/game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'entretaimer',
    loadChildren: () => import('./views/entretaimer/entretaimer.module').then( m => m.EntretaimerPageModule)
  },
  {
    path: 'gameprincipal',
    loadChildren: () => import('./views/gameprincipal/gameprincipal.module').then( m => m.GameprincipalPageModule)
  },
  {
    path: 'home-ii',
    loadChildren: () => import('./views/home-ii/home-ii.module').then( m => m.HomeIIPageModule)
  },
  {
    path: 'imc',
    loadChildren: () => import('./views/imc/imc.module').then( m => m.IMCPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./views/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./views/forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'resetpassword/:token',
    loadChildren: () => import('./views/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'babyentretaimer',
    loadChildren: () => import('./views/babyentretaimer/babyentretaimer.module').then( m => m.BabyentretaimerPageModule)
  },
  {
    path: 'requestresetpass',
    loadChildren: () => import('./views/requestresetpass/requestresetpass.module').then( m => m.RequestresetpassPageModule)
  },
  {
    path: 'detalles-cita',
    loadChildren: () => import('./views/detalles-cita/detalles-cita.module').then( m => m.DetallesCitaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
