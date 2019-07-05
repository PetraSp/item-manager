import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemListComponent } from './containers/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderbyFormComponent } from './components/orderby-form/orderby-form.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    SearchFormComponent,
    OrderbyFormComponent,
    FavoriteListComponent
  ],

  entryComponents: [
    FavoriteListComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
