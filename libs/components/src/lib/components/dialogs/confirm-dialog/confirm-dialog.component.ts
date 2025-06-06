import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PRIZM_ANIMATIONS_DURATION, PRIZM_DIALOG_KIT } from '../../../tokens';
import { PRIZM_DIALOG_CLOSE_STREAM, PRIZM_DIALOG_PROVIDERS } from '../dialog/dialog-options';
import { PrizmAnimationOptions, prizmFadeIn, prizmSlideInTop } from '../../../animations';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService, PrizmToObservablePipe } from '@prizm-ui/helpers';
import { PrizmBaseDialogContext, PrizmDialogSize } from '../dialog';
import { PrizmConfirmDialogOptions, PrizmConfirmDialogResultDefaultType } from './confirm-dialog.models';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PolymorphModule, PrizmFocusTrapDirective, PrizmHintOnOverflowDirective } from '../../../directives';
import { PrizmTheme, PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmButtonComponent } from '../../button';
import { PrizmScrollbarModule } from '../../scrollbar';
import { prizmI18nInitWithKey, PrizmLanguageDialogs } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PRIZM_DIALOG_PROVIDERS, ...prizmI18nInitWithKey(PRIZM_DIALOG_KIT, 'dialog')],
  standalone: true,
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmThemeModule,
    PrizmToObservablePipe,
    PrizmButtonComponent,
    PrizmFocusTrapDirective,
    PrizmScrollbarModule,
    PrizmHintOnOverflowDirective,
  ],
  animations: [prizmSlideInTop, prizmFadeIn],
})
export class PrizmDialogConfirmComponent<DATA = unknown> extends PrizmAbstractTestId {
  @Input()
  public context!: PrizmBaseDialogContext<
    PrizmConfirmDialogResultDefaultType,
    PrizmConfirmDialogOptions<DATA>
  >;

  @Input()
  public close!: () => void;

  get theme(): PrizmTheme {
    return this.context.theme!;
  }

  @HostBinding('attr.prizm-size')
  public get size(): PrizmDialogSize {
    return this.context.size as PrizmDialogSize;
  }

  @HostBinding('attr.prizm-dialog-id')
  public get id(): string {
    return this.context.id as string;
  }

  @HostBinding('@prizmSlideInTop')
  @HostBinding('@prizmFadeIn')
  public get slideInTop(): PrizmAnimationOptions {
    return this.animation;
  }

  @HostBinding('style.width')
  readonly width = '100%';

  @HostBinding('attr.data-testid')
  override get testId() {
    const postfix = this.testIdPostfix || this.context.testId;
    return this.generateMainTestId + (postfix ? `--${postfix}` : '');
  }
  override set testId(value: string) {
    this.testIdPostfix = value;
  }

  override readonly testId_ = 'ui_form_submit';

  private readonly animation = {
    value: '',
    params: {
      start: '40px',
      duration: this.duration,
    },
  } as const;

  constructor(
    @Inject(PRIZM_ANIMATIONS_DURATION) private readonly duration: number,
    @Inject(PRIZM_DIALOG_CLOSE_STREAM) readonly close$: Observable<unknown>,
    @Inject(PRIZM_DIALOG_KIT)
    public readonly dictionary$: Observable<PrizmLanguageDialogs['dialog']>,
    private readonly destroy$: PrizmDestroyService,
    private readonly elRef: ElementRef
  ) {
    super();
    close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.close();
    });
  }
}
