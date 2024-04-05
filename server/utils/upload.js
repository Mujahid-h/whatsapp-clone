import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

const storage = new GridFsStorage({
  url,
  options: { useUnifiedTopology: true, useNewUrlParser: true },

  file: (req, file) => {
    const match = ["image/jpg", "image/png", "image/jpeg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

const upload = multer({ storage }); // Explicitly specifying storage options

export default upload;
