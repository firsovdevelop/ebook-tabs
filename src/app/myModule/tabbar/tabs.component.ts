import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tabs',
  styles: [`
    div {
      padding: 10px;
      margin-top: 10px;          
    }
  `],
  template: `
    <div><ng-content></ng-content></div>
  `,
})
export class TabsComponent implements OnInit {
  @Input() tab: number;

  public ngOnInit() {
    console.log('TabsComponent init');
  }
}
