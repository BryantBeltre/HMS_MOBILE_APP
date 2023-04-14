import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntretaimerPage } from './entretaimer.page';

const routes: Routes = [
  {
    path: '',
    component: EntretaimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntretaimerPageRoutingModule {}
