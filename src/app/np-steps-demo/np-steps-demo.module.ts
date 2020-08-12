import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpStepsDemoRoutingModule } from './np-steps-demo-routing.module';
import { NpStepsDemoComponent } from './np-steps-demo.component';
import { NpStepsModule } from 'np-ui-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpStepsDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NpStepsDemoRoutingModule,
    NpStepsModule
  ]
})
export class NpStepsDemoModule { }