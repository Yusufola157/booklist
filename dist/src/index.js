"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 2020;
const route_1 = __importDefault(require("../Routes/route"));
const cors_1 = __importDefault(require("cors"));
require("../config/db");
app.use(express_1.default.json());
app.use(cors_1.default);
app.use("/", route_1.default);
app.listen(PORT, () => {
    console.log("server is up.....");
});
