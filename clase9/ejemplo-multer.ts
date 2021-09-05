import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/ejemplo-multer.html');
});

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    // error.httpStatusCode = 400
    return next(error)
  }
  res.send(file);
})

app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    // error.httpStatusCode = 400
    return next(error)
  }
  res.send(files);
})

app.listen(3000, () => console.log('Server started on port 3000'));