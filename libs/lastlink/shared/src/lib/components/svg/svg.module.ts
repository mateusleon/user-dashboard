import { NgModule } from '@angular/core';
import { SvgComponent } from './svg.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SvgComponent],
  exports: [SvgComponent],
  imports: [CommonModule],
})
export class SvgModule {}
