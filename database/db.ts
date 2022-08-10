import mongoose from 'mongoose';

/* 
* 0: disconnected
* 1: connected
* 2: connecting
* 3: disconnecting
 */

const mongooConnection = {
    isConnected: 0
}

export const connect = async () => {
    if (mongooConnection.isConnected) {
        console.log('Ya estamos conectados');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongooConnection.isConnected = mongoose.connections[0].readyState;

        if (mongooConnection.isConnected === 1) {
            console.log('usando conexion anterior');
            return;
        }

        await mongoose.disconnect();
    }


    await mongoose.connect(process.env.MONGO_URL || '');//Colocar variable de entorno del archivo .env de url de mongo con 
    mongooConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', process.env.MONGO_URL)//Colocar variable de entorno del archivo .env de url de mongo
}
export const disconnect = async () => {
    if (process.env.NODE_ENV === 'development') return;

    if (mongooConnection.isConnected === 0) return;

    await mongoose.disconnect();
    console.log('Desconectado de MongoDB')
}