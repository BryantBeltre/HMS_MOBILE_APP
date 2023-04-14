import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestresetpassPage } from './requestresetpass.page';

const routes: Routes = [
  {
    path: '',
    component: RequestresetpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestresetpassPageRoutingModule {}
