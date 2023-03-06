import { createStudent, getAllStudents, getStudentById } from '../controllers/student.controller';
import express from 'express'
import validate from '../middleware/vialdate'
import { createStudentSchema } from '../schema.zod/student.zod';
let router = express.Router()

// read 
router.get('/', getAllStudents);

// read one student 
router.get('/studentById/:id', getStudentById);

// create 
router.post('/', validate(createStudentSchema), createStudent);

export default router;