import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    LayoutComponent,
    HeaderComponent,
    ListComponent,
    FilterComponent],

  exports: [LayoutComponent]
})
export class UiModule { }
