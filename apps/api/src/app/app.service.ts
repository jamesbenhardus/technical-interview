import { Injectable } from '@nestjs/common';
import { folders } from './data/folders';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  getFolders() {
    return folders;
  }
}
