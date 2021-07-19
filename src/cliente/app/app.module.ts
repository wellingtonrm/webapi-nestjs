import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioconsumerModule } from '../usuarioconsumer/usuarioconsumer.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:1212sdsd@homeapp.oredj.mongodb.net/homeapp?retryWrites=true&w=majority'),
     UsuarioconsumerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
