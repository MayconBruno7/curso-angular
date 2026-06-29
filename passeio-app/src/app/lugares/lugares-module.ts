import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LugaresRoutingModule } from './lugares-routing-module';
import { Lugar } from './lugar/lugar';

@NgModule({
  declarations: [Lugar],
  imports: [CommonModule, ReactiveFormsModule, LugaresRoutingModule],
})
export class LugaresModule {}
