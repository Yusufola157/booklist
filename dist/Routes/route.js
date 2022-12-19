"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("../config/multer"));
const controller_1 = require("../controller/controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/post").post(multer_1.default, controller_1.postBook);
router.route("/getAll").get(controller_1.getAll);
router.route("/getOne").get(controller_1.getOne);
router.route("/updatView").patch(controller_1.updataViews);
exports.default = router;
