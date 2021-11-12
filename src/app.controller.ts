import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

 /* @Get('')
  getHello(): object {
    const marriane =  this.appService.getHello();
    return marriane;
  }*/
  @Get('')
  async getEmail(){
     await this.appService.getEmail();
     return {message: "mail sent"};
  }

}
