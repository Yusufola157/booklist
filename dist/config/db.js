"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb+srv://Sukanmi157:Sukanmi157@cluster0.dorzl9v.mongodb.net/jajiStore?retryWrites=true&w=majority";
mongoose_1.default.connect(URI);
mongoose_1.default.connection
    .on("open", () => {
    console.log("db is on");
})
    .once("error", (error) => {
    console.log("an eror occ");
});
