import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BabyentretaimerPageRoutingModule } from './babyentretaimer-routing.module';

import { BabyentretaimerPage } from './babyentretaimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BabyentretaimerPageRoutingModule
  ],
  declarations: [BabyentretaimerPage]
})
export class BabyentretaimerPageModule {}
