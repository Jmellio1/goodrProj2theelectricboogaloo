"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const emp_1 = __importDefault(require("./routes/emp"));
const router = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.config.mongo.url)
    .then(() => {
    console.log("connected");
    StartServer();
})
    .catch((error) => {
    console.log(error);
});
const StartServer = () => {
    router.use((req, res, next) => {
        console.log(`incoming -> Method ${req.method}- url ${req.url}   URL ${req.socket.remoteAddress}`);
        res.on("finish", () => {
            console.log(`incoming -> Method ${req.method}- url ${req.url}   URL ${req.socket.remoteAddress} status ${res.statusCode}`);
        });
        next();
    });
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
    router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Heards", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method == "Options") {
            res.header("Access-Control-Allow-Methods", "GET,POST");
            return res.status(200).json({});
        }
        next();
    });
    router.use("/employee", emp_1.default);
    router.get("/ping", (req, res, next) => res.status(200).json({ message: "WE BE PINGING" }));
    router.use((req, res, next) => {
        const error = new Error("What are you looking for?");
        return res.status(404).json({ message: error.message });
    });
    http_1.default
        .createServer(router)
        .listen(config_1.config.server.port, () => console.log(`server is running on port ${config_1.config.server.port}`));
};
