import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddappointmentsPageRoutingModule } from './addappointments-routing.module';

import { AddappointmentsPage } from './addappointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddappointmentsPageRoutingModule
  ],
  declarations: [AddappointmentsPage]
})
export class AddappointmentsPageModule {}
