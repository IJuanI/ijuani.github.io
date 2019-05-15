import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [LayoutComponent, ProfileComponent, ProjectsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, PerfectScrollbarModule, MatTabsModule],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule {}
