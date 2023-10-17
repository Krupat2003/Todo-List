import mongoose from 'mongoose'; 
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME; //.env file me se kuchabhi get karna he to process method ka use hota he
const PASSWORD = process.env.DB_PASSWORD;

 const Connection = () => {

    const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-zex0216-shard-00-00.lr90jd5.mongodb.net:27017,ac-zex0216-shard-00-01.lr90jd5.mongodb.net:27017,ac-zex0216-shard-00-02.lr90jd5.mongodb.net:27017/?ssl=true&replicaSet=atlas-6cplmm-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, {useNewUrlParser:true});

    mongoose.connection.on('connected', () => {
        console.log('Database Connected Successfully')
    })

    mongoose.connection.on('disconnented', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error While Connecting with the database', error.message);
    })
}

export default Connection;