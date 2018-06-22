import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab-title',
  styles: [`
    .tabs__title {
      border-left: 1px solid #ccc;
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
      background: #F5F5F5;
    }
  `],
  template: `
    <div class="tabs__title" [class.tabs__title--active]="this.active"><ng-content></ng-content></div>
  `,
})
export class TabTitleComponent implements OnInit {
  @Input() active: boolean;

  public ngOnInit() {
    console.log('TabTitleComponent init');
  }
}
