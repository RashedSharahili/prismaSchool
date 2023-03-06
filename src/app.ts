import express,{Application, Request, Response} from 'express';
import { connectDB } from './config/db';
import studentRouter from './routes/student.route'
const app:Application = express();
import * as dotenv from 'dotenv'
dotenv.config()
let port = process.env.PORT || 3003;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var multer = require('multer');
var upload = multer();
// for parsing multipart/form-data
app.use(upload.array()); 
// app.use(express.static('public'));

app.use('/students', studentRouter);

app.listen(port,()=>console.log(`express started on port ${port}`));

