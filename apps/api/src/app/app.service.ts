import { Injectable } from '@nestjs/common';
import { userData } from './data/user-data';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  getUserData(userId: number) {
    const user = userData.find((data) => data.userId === userId);
    return user;
  }
}
