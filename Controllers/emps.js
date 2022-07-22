"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Employee_1 = __importDefault(require("../Models/Employee"));
const creatEmp = (req, res, next) => {
    const { gender, FirstName, LastNamel, MiddleName, departmen, EmailAddress, Number, } = req.body;
    const newEMp = new Employee_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        gender,
        FirstName,
        LastNamel,
        MiddleName,
        departmen,
        EmailAddress,
        Number,
    });
    return newEMp
        .save()
        .then((newEMp) => res.status(201).json({ newEMp }))
        .catch((error) => res.status(500).json({ error }));
};
const readEMps = (req, res, next) => {
    return Employee_1.default
        .find()
        .then((emps) => res.status(201).json({ emps }))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { creatEmp, readEMps };
