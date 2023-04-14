import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddappointmentsPage } from './addappointments.page';

const routes: Routes = [
  {
    path: '',
    component: AddappointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddappointmentsPageRoutingModule {}
