
import { Component, OnInit, ViewChild } from '@angular/core';

import { EntityTypeComponent } from 'angularm';

@Component({
    selector: 'div [mgListingTable]',
    template: `<div *ngIf="entityType">
    <style>{{configuration('generalStyle')}}</style>
    <h1>Listing {{ entityType.plural | titleCase }}</h1>
    <div class="table-reponsive">
        <table data-toggle="table" data-pagination="true" data-search="true" data-height="300" class="table table-striped">
        <thead>
            <tr>
            <th *ngFor="let propertyType of entityType.propertyTypes">{{propertyType.name | titleCase}}</th>
            <th colspan="3"></th>
            </tr>
        </thead>
        <tbody>
            <div *ngFor="let entity of entities" [mgEntity]="'table_line'" [entity]="entity">
            </div>
        </tbody>
        </table>
        <a href="#" (click)="create()">New {{entityType.singular | titleCase}}</a>
        <a href="#" (click)="back()">Back</a>
    </div>
  </div>`
})

export class CustomListingTableComponent extends EntityTypeComponent { }