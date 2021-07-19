import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioconsumerService } from './usuarioconsumer.service';
import { UsuarioconsumerController } from './usuarioconsumer.controller'
import { UsuarioConsumer } from './schema/usuarioconsumer.schema'


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Usuarioconsumer', schema: UsuarioConsumer }])
  ],
  controllers: [UsuarioconsumerController],
  providers: [UsuarioconsumerService]
})
export class UsuarioconsumerModule {}
