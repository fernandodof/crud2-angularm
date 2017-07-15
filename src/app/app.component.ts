import { Component } from '@angular/core';
import { AngularmService } from 'angularm';
import { describeDomain } from 'app/entities';
import { defineRules } from "app/rules";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(angularm: AngularmService) {
    describeDomain(angularm);
    defineRules(angularm);
  }
}
