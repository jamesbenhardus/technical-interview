import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('message')
  getMessage() {
    return this.appService.getData();
  }

  @Get('folders')
  getFolders() {
    return this.appService.getFolders();
  }
}
