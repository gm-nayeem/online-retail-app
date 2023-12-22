import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Backend Development Task Using NodeJS and NestJS';
  }
}
