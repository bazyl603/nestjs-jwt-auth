import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Public } from './decorators';

@Controller('')
export class AppController {
  @Public()
  @Get('/online')
  @HttpCode(HttpStatus.OK)
  isOnline(): { online: boolean } {
    return { online: true };
  }
}
