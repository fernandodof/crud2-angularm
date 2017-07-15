import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  HomeComponent,
  AngularmModule,
  ListEntitiesComponent,
  NewEntityComponent,
  ShowEntityComponent,
  EditEntityComponent,
  PageNotFoundComponent
} from 'angularm';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CustomListingTableComponent } from 'app/custom-listing-table.component';

export const routes: Routes = [
  { path: ':entitytypename', component: ListEntitiesComponent },
  { path: ':entitytypename/new', component: NewEntityComponent },
  { path: ':entitytypename/:key', component: ShowEntityComponent },
  { path: ':entitytypename/:key/edit', component: EditEntityComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomListingTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularmModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    CustomListingTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
