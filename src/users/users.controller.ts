import { Controller, Post, Body } from '@nestjs/common';
import { CreateUser } from './dtos/create-users.dto';

@Controller('auth')
export class UsersController {

    @Post('/signup')
    createUser(@Body() body: CreateUser){
        console.log(body);
    }

}
