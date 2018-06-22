import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab-content',
  styles: [`
    div {
      padding: 18px;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  `],
  template: `
    <div><ng-content></ng-content></div>
  `,
})
export class TabContentComponent implements OnInit {
  @Input() tab: number;

  public ngOnInit() {
    console.log('TabContentComponent init');
  }
}
