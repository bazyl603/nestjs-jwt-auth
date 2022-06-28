import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get('/online')
  @HttpCode(HttpStatus.OK)
  isOnline(): { online: boolean } {
    return { online: true };
  }
}
