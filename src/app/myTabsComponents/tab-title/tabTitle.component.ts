import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: './tabTitle.component.html',
  styleUrls: [ './tabTitle.component.css' ]
})
export class TabTitleComponent implements OnInit {
  @ViewChild('tabTitle') tabTitle: ElementRef;

  public ngOnInit() {
    console.log(`>>> TabTitleComponent initialized`);
  }

  // Получиить содержимое элемента
  getTitleHTML() {
    return this.tabTitle.nativeElement.innerHTML;
  }
}
