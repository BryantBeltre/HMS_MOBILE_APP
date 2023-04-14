import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameprincipalPageRoutingModule } from './gameprincipal-routing.module';

import { GameprincipalPage } from './gameprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameprincipalPageRoutingModule
  ],
  declarations: [GameprincipalPage]
})
export class GameprincipalPageModule {}
