import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandEditPageRoutingModule } from './brand-edit-routing.module';

import { BrandEditPage } from './brand-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandEditPageRoutingModule
  ],
  declarations: [BrandEditPage]
})
export class BrandEditPageModule {}
