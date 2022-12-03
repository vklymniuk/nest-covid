import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVersion(): string {
    //do some pars of file
    return '0 0 0';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
