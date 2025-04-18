import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Oi, Cauê! Esse é seu primeiro endpoint no NestJS.';
  }
}

