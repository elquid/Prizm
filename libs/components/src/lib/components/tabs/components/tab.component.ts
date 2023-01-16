import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { PrizmTabType } from '../tabs.interface';
import { PrizmTabsService } from '../tabs.service';
import { PolymorphContent } from '../../../directives';
import { Observable } from 'rxjs';

@Component({
  selector: 'prizm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTabComponent implements OnInit, OnDestroy {
  @Input() @HostBinding('attr.tab-type') public type: PrizmTabType = 'line';
  @Input() icon: PolymorphContent = null;
  @Input() content: PolymorphContent = null;
  @Input() closeIcon: PolymorphContent = 'cancel-close';
  @Input() count = 0;
  @Input() closable: boolean;
  @Input() disabled = false;
  @Input() idx: number = null;
  @Output() public closeTab = new EventEmitter<void>();

  @HostBinding('attr.testId')
  readonly testId = 'prizm_tab';
  public isActiveTab$: Observable<boolean>;

  private get tab(): PrizmTabComponent {
    return typeof this.idx === 'number'
      ? this.tabsService.getTabByIdx(this.idx)
      : this
  }

  constructor(
    public readonly tabsService: PrizmTabsService,
    public readonly el: ElementRef<HTMLElement>,
  ) {
    this.tabsService.addTab(this);
  }

  @HostListener('click')
  public onClick(): void {
    this.selectTab();
  }

  public ngOnDestroy(): void {
    this.tabsService.removeTab(
      this.tab
    );
  }

  public ngOnInit(): void {
    this.isActiveTab$ = this.tabsService.isActiveTab(
      this.tab
    )
  }

  public selectTab(): void {
    this.tabsService?.selectTab(
      this.tab
    );
  }

  public onClose(event: MouseEvent): void {
    event.stopPropagation();
    this.tab.closeTab.emit()
    this.closeTab.emit()
  }
}
