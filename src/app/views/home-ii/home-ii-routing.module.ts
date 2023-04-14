import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeIIPage } from './home-ii.page';

const routes: Routes = [
  {
    path: '',
    component: HomeIIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeIIPageRoutingModule {}
