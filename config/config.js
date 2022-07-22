"use strict";
///import dotenv from "dotenv";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
//dotenv.config();
//const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
//const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb+srv://superUser:Jnmko0987@cluster0.8vxj2.mongodb.net/?retryWrites=true&w=majority`;
const SERVER_PORT = 9090;
exports.config = {
    mongo: {
        url: MONGO_URL,
    },
    server: {
        port: SERVER_PORT,
    },
};
