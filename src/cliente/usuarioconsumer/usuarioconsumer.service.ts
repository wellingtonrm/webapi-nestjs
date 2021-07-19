import { Injectable } from '@nestjs/common';
import { UsuarioConsumerInterface } from './usuarioconsumer'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UsuarioconsumerService {



    constructor(
        @InjectModel("Usuarioconsumer") private readonly usuarioconsumer: Model<UsuarioConsumerInterface>,

    ) { }

    async getAll(res) {
        const userLista = await this.usuarioconsumer.find().exec();



        if (userLista.length > 0) {
            return res.status(200).json({
                response: true,
                data: userLista
            })
        } else {
            return res.status(200).json({
                response: false,
                data: {
                    Error: "Usuario vazio"
                }
            })
        }

    }

    async getById(res, id: string) {

        const user = await this.usuarioconsumer.findById(id).exec();
        if (user) {
            const { name, email } = user

            return res.status(200).json({
                response: true,
                data: {
                    name,
                    email
                }
            })
        } else {
            return res.status(200).json({
                response: false,
                data: {
                    Error: "Esse Usuario não existe"
                }
            })
        }


    }

    async create(res, user: UsuarioConsumerInterface) {


        const userRes = await this.usuarioconsumer.findOne({ email: user.email }).exec();

        if (!userRes) {
            const creatUser = new this.usuarioconsumer(user)
            const { name, email } = await creatUser.save();
            return res.status(200).json({
                response: true,
                data: {
                    name,
                    email
                }
            })

        }else{
            return res.status(200).json({
                response: false,
                data:{
                    Error:"Usuario já existe"
                }
              
            })

        }


    }
    async update(res, id: string, user: UsuarioConsumerInterface) {

        await this.usuarioconsumer.updateOne({ _id: id }, user).exec();
        return this.usuarioconsumer.findById(id).exec();

    }
    async delete(res, id: string) {

        try {
            const response = await this.usuarioconsumer.findById(id).exec();

            if (response) {
                await this.usuarioconsumer.deleteOne({ _id: id }).exec();
                res.status(200).json({
                    response: true
                })
            } else {
                res.status(200).json({
                    response: false
                })
            }



        } catch (err) {

            return err.message
        }

    }
}
