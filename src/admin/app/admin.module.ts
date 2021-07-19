import { Module } from '@nestjs/common';
import { AppController } from './admin.controller';
import { AppService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:1212sdsd@homeapp.oredj.mongodb.net/homeapp?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AdminModule {}
