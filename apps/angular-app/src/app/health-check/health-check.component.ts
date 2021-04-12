import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'technical-interview-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss'],
})
export class HealthCheckComponent {
  isCorruptedUserId: number;
  corruptedUserId: number;
  uncorruptedUserId: number;
  isCorruptedFilesystem: any;

  isCorruptedUserIdResponse: any;
  isCorruptedFilesystemResponse: any;
  corruptedResponse: any;
  uncorruptedResponse: any;

  constructor(private appService: AppService) {}

  getIsCorrupted() {
    this.appService
      .isCorruptedByUser(this.isCorruptedUserId)
      .subscribe((res) => (this.isCorruptedUserIdResponse = res));
  }

  getCorrupted() {
    this.appService
      .getCorrupted(this.corruptedUserId)
      .subscribe((res) => (this.corruptedResponse = res));
  }

  getUncorrupted() {
    this.appService
      .getUncorrupted(this.uncorruptedUserId)
      .subscribe((res) => (this.uncorruptedResponse = res));
  }

  postIsCorrupted() {
    const filesystem = JSON.parse(this.isCorruptedFilesystem);
    this.appService
      .isCorruptedByFilesystem(filesystem)
      .subscribe((res) => (this.isCorruptedFilesystemResponse = res));
  }
}
