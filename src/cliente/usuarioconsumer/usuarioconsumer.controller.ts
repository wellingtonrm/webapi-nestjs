import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioconsumerService} from './usuarioconsumer.service'
import { UsuarioConsumerInterface } from './usuarioconsumer';


@Controller('user')
export class UsuarioconsumerController {
    constructor(private userConsumerService: UsuarioconsumerService) { }

    @Get()
   async  getAll(): Promise<UsuarioConsumerInterface[]>{

        return this.userConsumerService.getAll();

    }
    @Get(':id')
    async getById(@Param('id') id:string ): Promise<UsuarioConsumerInterface> {

        return this.userConsumerService.getById(id);

    }
    @Post()
    async create(@Body() userconsumer: UsuarioConsumerInterface) : Promise<UsuarioConsumerInterface>{

        return await this.userConsumerService.create(userconsumer);

    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() user: UsuarioConsumerInterface): Promise<UsuarioConsumerInterface>{

        return this.userConsumerService.update(id, user);

    }
    @Delete(':id')
    async delete(@Param('id') id: string ){

         this.userConsumerService.delete(id);

    }


}
