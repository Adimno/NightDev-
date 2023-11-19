import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandCreatePage } from './brand-create.page';

const routes: Routes = [
  {
    path: '',
    component: BrandCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandCreatePageRoutingModule {}
