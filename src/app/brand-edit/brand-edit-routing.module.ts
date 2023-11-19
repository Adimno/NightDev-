import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandEditPage } from './brand-edit.page';

const routes: Routes = [
  {
    path: '',
    component: BrandEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandEditPageRoutingModule {}
