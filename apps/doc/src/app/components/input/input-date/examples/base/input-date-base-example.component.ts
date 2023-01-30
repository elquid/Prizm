import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDay } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-base-example',
  templateUrl: './input-date-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputDateBaseExampleComponent {
  public readonly control = new FormControl(new PrizmDay(2017, 0, 15));
}
