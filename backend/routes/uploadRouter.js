import multer from 'multer';
import express from 'express';
import { isAuth } from '../utils.js';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}_${file.fieldname}.png`);
  },
});

const upload = multer({ storage });

uploadRouter.post('/', isAuth, upload.single('bild'), function (req, res) {
  res.send(`/${req.file.path}`);
});

export default uploadRouter;