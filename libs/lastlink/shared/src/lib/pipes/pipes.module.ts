import { NgModule } from '@angular/core';
import { OfModule } from './of/of.module';
import { SplitModule } from './split/split.module';

@NgModule({
  imports: [OfModule, SplitModule],
  exports: [OfModule, SplitModule],
})
export class PipesModule {}
