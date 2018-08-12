import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { CustomMaterialModule } from './core/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { routes } from './routes';
import { reducers, metaReducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    CustomMaterialModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    CoreModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25
    }) : [],
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
