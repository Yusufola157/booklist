import multer from "multer";
import viewImage from "../config/multer";
import {
  postBook,
  getAll,
  getOne,
  updataViews,
} from "../controller/controller";
import { Router } from "express";
const router = Router();

router.route("/post").post(viewImage, postBook);
router.route("/getAll").get(getAll);
router.route("/getOne").get(getOne);
router.route("/updatView").patch(updataViews);
export default router;
