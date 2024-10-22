import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [CommonModule, TemplateDrivenFormRoutingModule, FormsModule],
})
export class TemplateDrivenFormModule {}
