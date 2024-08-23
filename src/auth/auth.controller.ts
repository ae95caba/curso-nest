import { Controller, Get } from '@nestjs/common';

@Controller({})
export class AuthController {
  @Get('/auth')
  getAuth() {
    return 'this is auth';
  }
}
