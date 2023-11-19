import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandCreatePageRoutingModule } from './brand-create-routing.module';

import { BrandCreatePage } from './brand-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandCreatePageRoutingModule
  ],
  declarations: [BrandCreatePage]
})
export class BrandCreatePageModule {}
