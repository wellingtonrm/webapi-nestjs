import { Document } from "mongoose";

export interface UsuarioConsumerInterface extends Document {
    name: String,
    email:String,
    password:String,

    
}