import { Component, Input } from '@angular/core';
import { PrizmInputCarousel } from './types';

@Component({
  selector: 'prizm-input-carousel-auxiliary-left',
  template: `
    <button
      *ngIf="!carousel.lightMode && !carousel.disabled"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.leftCtrlDisabled"
      (click)="carousel.left()"
      prizmInputIconButton="chevrons-double-left"
    ></button>
    <button
      *ngIf="!carousel.disabled"
      [interactive]="true"
      [disabled]="!!carousel.carouselContent?.controlsState?.stepleftCtrlDisabled"
      (click)="carousel.stepLeft()"
      prizmInputIconButton="chevrons-left"
    ></button>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class PrizmInputCarouselAuxiliaryLeftComponent {
  @Input() carousel!: PrizmInputCarousel;
}
