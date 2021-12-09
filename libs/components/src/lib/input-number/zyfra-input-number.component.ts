import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface InputEvent {
  originalEvent: KeyboardEvent;
  value: number;
}

@Component({
  selector: 'zyfra-input-number',
  templateUrl: './zyfra-input-number.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraInputNumberComponent {
  @Input() value: number;
  @Input() format = true;
  @Input() showButtons: boolean;
  @Input() buttonLayout = 'stacked';
  @Input() spanClass: string;
  @Input() label: string;
  @Input() iClass: string;
  @Input() incrementButtonClass: string;
  @Input() decrementButtonClass: string;
  @Input() incrementButtonIcon = 'zyfra-icon chevrons-up';
  @Input() decrementButtonIcon = 'zyfra-icon chevrons-down';
  @Input() locale: string;
  @Input() localeMatcher = 'best fit';
  @Input() mode = 'decimal';
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() currency: string;
  @Input() currencyDisplay = 'symbol';
  @Input() useGrouping = true;
  @Input() minFractionDigits: number;
  @Input() maxFractionDigits: number;
  @Input() min: number;
  @Input() max: number;
  @Input() step = 1;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() inputId: string;
  @Input() inputStyle: string;
  @Input() inputStyleClass: string;
  @Input() placeholder: string;
  @Input() size: number;
  @Input() maxlength: number;
  @Input() tabindex: string;
  @Input() disabled: boolean;
  @Input() title: string;
  @Input() ariaLabel: string;
  @Input() ariaRequired: boolean;
  @Input() name: string;
  @Input() autocomplete: string;

  @Output() valueChange = new EventEmitter<number>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onInput = new EventEmitter<InputEvent>();
}