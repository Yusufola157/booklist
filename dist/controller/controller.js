"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = exports.getAll = exports.postBook = exports.updataViews = void 0;
const bookShema_1 = __importDefault(require("../model/bookShema"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const postBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { author, title, summary, category } = req.body;
        const imageView = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const newBook = yield bookShema_1.default.create({
            author,
            title,
            coverImage: imageView.secure_url,
            summary,
            ISBN: `${isbn1}-${isbn2}-${isbn3}`,
            views: [],
            authorImage: author.charAt(0).toUpperCase(),
            category,
        });
        return res.status(201).json({
            message: "here is the data",
            data: newBook,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "here is the data",
            data: error,
        });
    }
});
exports.postBook = postBook;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getA = yield bookShema_1.default.find();
        return res.status(201).json({
            message: "here are the student",
            data: getA,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "error occ",
            data: error,
        });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getA = yield bookShema_1.default.findById(req.params.id);
        return res.status(201).json({
            message: "here are the student",
            data: getA,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "error occ",
            data: error,
        });
    }
});
exports.getOne = getOne;
const updataViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const view = yield bookShema_1.default.findByIdAndUpdate(req.params.id, {
            $push: { views: req.body.ip },
        }, { new: true });
        return res.status(201).json({
            message: "here are the student",
            data: view,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "error occ",
            data: error,
        });
    }
});
exports.updataViews = updataViews;
