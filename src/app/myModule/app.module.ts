import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';

import { TabsComponent } from './tabbar/tabs.component';
import { TabComponent } from './tabbar/tab.component';
import { TabTitleComponent } from './tabbar/tabTitle.component';
import { TabContentComponent } from './tabbar/tabContent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, TabsComponent, TabComponent, TabTitleComponent, TabContentComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ ]
})
export class AppModule { }
