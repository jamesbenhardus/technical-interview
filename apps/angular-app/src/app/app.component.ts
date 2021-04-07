import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'technical-interview-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  folders: unknown[] = [];

  constructor() {}

  ngOnInit() {}
}
