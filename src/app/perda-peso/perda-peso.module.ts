import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerdaPesoPageRoutingModule } from './perda-peso-routing.module';

import { PerdaPesoPage } from './perda-peso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerdaPesoPageRoutingModule
  ],
  declarations: [PerdaPesoPage]
})
export class PerdaPesoPageModule {}
