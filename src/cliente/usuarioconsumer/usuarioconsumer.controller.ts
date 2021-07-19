import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UsuarioconsumerService} from './usuarioconsumer.service'
import { UsuarioConsumerInterface } from './usuarioconsumer';
import { Response } from 'express';


@Controller('user')
export class UsuarioconsumerController {
    constructor(private userConsumerService: UsuarioconsumerService) { }

    @Get()
    async getAll(@Res() response: Response): Promise<UsuarioConsumerInterface[]>{

        return this.userConsumerService.getAll(response);

    }
    @Get(':id')
    async getById(@Res() response: Response, @Param('id') id:string ): Promise<UsuarioConsumerInterface> {

        return this.userConsumerService.getById(response, id);

    }
    @Post()
    async create(@Res() response: Response , @Body() userconsumer: UsuarioConsumerInterface) : Promise<UsuarioConsumerInterface>{

        return await this.userConsumerService.create(response, userconsumer);

    }
    @Put(':id')
    async update(@Res() response: Response, @Param('id') id: string, @Body() user: UsuarioConsumerInterface): Promise<UsuarioConsumerInterface>{

        return this.userConsumerService.update(response, id, user);

    }
    @Delete(':id')
    async delete(@Res() response: Response, @Param('id') id: string ){

         this.userConsumerService.delete(response, id);

    }


}
