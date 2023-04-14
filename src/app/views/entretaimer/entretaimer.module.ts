import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntretaimerPageRoutingModule } from './entretaimer-routing.module';

import { EntretaimerPage } from './entretaimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntretaimerPageRoutingModule
  ],
  declarations: [EntretaimerPage]
})
export class EntretaimerPageModule {}
