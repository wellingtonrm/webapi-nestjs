import * as mongoose from 'mongoose'


export const UsuarioConsumer = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})