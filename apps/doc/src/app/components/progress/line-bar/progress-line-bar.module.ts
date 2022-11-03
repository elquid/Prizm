import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ProgressLineBarComponent } from './progress-line-bar.component';
import { PolymorphModule, PzmProgressModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmProgressBaseExampleComponent } from './examples/base/progress-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmProgressModule,
    RouterModule.forChild(generateRoutes(ProgressLineBarComponent)),
  ],
  declarations: [
    PzmProgressBaseExampleComponent,
    ProgressLineBarComponent
  ],
  exports: [ProgressLineBarComponent],
})
export class ProgressLineBarModule {}