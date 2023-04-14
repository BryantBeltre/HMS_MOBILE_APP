import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeIIPageRoutingModule } from './home-ii-routing.module';

import { HomeIIPage } from './home-ii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeIIPageRoutingModule
  ],
  declarations: [HomeIIPage]
})
export class HomeIIPageModule {}
