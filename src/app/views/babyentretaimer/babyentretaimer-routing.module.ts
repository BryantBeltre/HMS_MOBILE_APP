import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabyentretaimerPage } from './babyentretaimer.page';

const routes: Routes = [
  {
    path: '',
    component: BabyentretaimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BabyentretaimerPageRoutingModule {}
