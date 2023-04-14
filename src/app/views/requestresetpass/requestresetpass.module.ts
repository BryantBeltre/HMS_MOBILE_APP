import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestresetpassPageRoutingModule } from './requestresetpass-routing.module';

import { RequestresetpassPage } from './requestresetpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestresetpassPageRoutingModule
  ],
  declarations: [RequestresetpassPage]
})
export class RequestresetpassPageModule {}
