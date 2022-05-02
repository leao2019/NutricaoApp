import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerdaPesoPage } from './perda-peso.page';

const routes: Routes = [
  {
    path: '',
    component: PerdaPesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerdaPesoPageRoutingModule {}
