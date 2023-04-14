import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameprincipalPage } from './gameprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: GameprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameprincipalPageRoutingModule {}
