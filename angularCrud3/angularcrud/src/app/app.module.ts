import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudAddComponent } from './crud-add/crud-add.component';
import { CrudGetComponent } from './crud-get/crud-get.component';
import {BusinessService} from './business.service'

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    CrudEditComponent,
    CrudAddComponent,
    CrudGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SlimLoadingBarModule
    
    
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
