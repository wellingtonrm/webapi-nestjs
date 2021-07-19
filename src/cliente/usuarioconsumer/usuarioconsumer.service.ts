import { Injectable } from '@nestjs/common';
import { UsuarioConsumerInterface } from './usuarioconsumer'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioconsumerService {

    constructor(@InjectModel("Usuarioconsumer") private readonly usuarioconsumer: Model<UsuarioConsumerInterface>){}

    async getAll() {
        return await this.usuarioconsumer.find().exec();
    }  

    async getById(id: string){
             return await this.usuarioconsumer.findById(id).exec();
    }
    
    async create(user: UsuarioConsumerInterface){


        const creatUser = new this.usuarioconsumer(user)
        return creatUser.save();
    }
    async update(id: string, user: UsuarioConsumerInterface) {
         await this.usuarioconsumer.updateOne({ _id: id }, user).exec();
         return this.getById(id)

    }
    async delete(id: string) {
     return await  this.usuarioconsumer.deleteOne({_id:id}).exec();
      
    }
}
