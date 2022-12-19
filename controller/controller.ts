import bookShema from "../model/bookShema";
import { Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import { ReadableStreamDefaultController } from "node:stream/web";

const postBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { author, title, summary, category } = req.body;
    const imageView = await cloudinary.uploader.upload(req?.file!.path);
    const isbn1 = Math.floor(Math.random() * 10000);
    const isbn2 = Math.floor(Math.random() * 10000);
    const isbn3 = Math.floor(Math.random() * 10000);
    const newBook = await bookShema.create({
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
  } catch (error) {
    return res.status(400).json({
      message: "here is the data",
      data: error,
    });
  }
};
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getA = await bookShema.find();
    return res.status(201).json({
      message: "here are the student",
      data: getA,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error occ",
      data: error,
    });
  }
};
const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getA = await bookShema.findById(req.params.id);
    return res.status(201).json({
      message: "here are the student",
      data: getA,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error occ",
      data: error,
    });
  }
};
const updataViews = async (req: Request, res: Response): Promise<Response> => {
  try {
    const view = await bookShema.findByIdAndUpdate(
      req.params.id,
      {
        $push: { views: req.body.ip },
      },
      { new: true }
    );
    return res.status(201).json({
      message: "here are the student",
      data: view,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error occ",
      data: error,
    });
  }
};
export { updataViews, postBook, getAll, getOne };
