import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tabContent.component.html',
  styleUrls: [ './tabContent.component.css' ]
})
export class TabContentComponent implements OnInit {

  public ngOnInit() {
    console.log(`>>> TabContentComponent initialized`);
  }

}
