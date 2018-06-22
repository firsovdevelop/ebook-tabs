import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public tabs = [
    {
      id:1,
      title: 'tab 1',
      content: 'content 1',
      active: true
    },
    {
      id:2,
      title: 'tab 2',
      content: 'content 2',
      active: false
    },
    {
      id:3,
      title: 'tab 3',
      content: 'content 3',
      active: false
    }
  ];

  public dec() {
    if(this.tabs.length > 0) {
      var hasActive = this.tabs[this.tabs.length - 1].active;
      this.tabs = this.tabs.slice(0, -1);

      if(hasActive && this.tabs.length != 0) {
        this.tabs[0].active = true;
      }
      console.log(`dec()`);
    }
  }

  public inc() {
    var tabIndex = this.tabs.length+1;
    var newTab = {
      id: tabIndex,
      title: 'tab '+tabIndex,
      content: 'content '+tabIndex,
      active: tabIndex == 1
    }
    this.tabs = [ ...this.tabs, newTab ];
    console.log(`inc()`);
  }

  // Выбор табы
  public selectTab(tab) {
    console.log(`selectTab`);
    this.tabs.forEach(function(t) {
      t.active = false;
    });
    tab.active = true;
  }
}
