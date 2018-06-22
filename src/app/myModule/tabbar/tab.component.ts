import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  styles: [ `
    .tabs__titles {
      border-bottom: 1px solid #ccc;      
    }
  `],
  template: `
    <div class="tabs__titles"><ng-content></ng-content></div>
  `,
})
export class TabComponent implements OnInit {

  public ngOnInit() {
    console.log('TabComponent init');
  }
}
