import { Component, OnInit, AfterContentInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: [ './tabs.component.css' ]
})
export class TabsComponent implements OnInit {
  @ContentChildren(TabComponent) tabsList: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.clearSelect(false);

    this.tabsList.changes.subscribe(data =>
      setTimeout(() => {
        this.clearSelect(true)
      })
    );
  }

  clearSelect(changeMode: boolean) {
    if(!changeMode) {
      this.tabsList.toArray().forEach(function(tab) {
        tab.active = false;
      });
    }

    if(this.tabsList.filter((tab) => tab.active).length === 0)  {
      setTimeout(() => {
        this.selectTab(this.tabsList.first);
      });
    }
  }

  selectTab(currentTab: TabComponent) {
    this.tabsList.toArray().forEach(function(tab) {
      tab.active = false;
    });
    if(currentTab != undefined) {
      currentTab.active = true;
    }

  }

  public ngOnInit() {
    console.log(`>>> TabsComponent initialized`);
  }
}
