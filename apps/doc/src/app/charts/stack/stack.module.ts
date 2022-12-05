import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { StackComponent } from './stack.component';
import { PrizmChartsStackExampleComponent } from './examples/base/prizm-charts-stack-example.component';
import { PrizmChartsStackModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsStackModule,
    RouterModule.forChild(generateRoutes(StackComponent)),
  ],
  declarations: [
    PrizmChartsStackExampleComponent,
    StackComponent
  ],
  exports: [StackComponent],
})
export class StackModule {}