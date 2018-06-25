import { Component, OnInit, Input, ContentChild } from '@angular/core';
import {TabTitleComponent} from '../tab-title/tabTitle.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: [ './tab.component.css' ]
})
export class TabComponent implements OnInit {
  @Input() active = false;
  @ContentChild(TabTitleComponent) title: TabTitleComponent;

  public ngOnInit() {
    console.log(`>>> TabComponent initialized`);
    console.log(this.title);
  }
}
