import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule }   from '@angular/forms';

import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TemplateDrivenComponent, FormDebugComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FormsTypesModule { }
