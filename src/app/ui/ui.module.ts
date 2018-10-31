import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { AddshipmentComponent } from './addshipment/addshipment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    LayoutComponent,
    HeaderComponent,
    ListComponent,
    FilterComponent,
    AddshipmentComponent],

  exports: [LayoutComponent]
})
export class UiModule { }
