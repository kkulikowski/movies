import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomMaterialModule } from './material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  NotFoundComponent,
  DashboardComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CustomMaterialModule,
    FlexLayoutModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    COMPONENTS
  ],
  providers: [],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
