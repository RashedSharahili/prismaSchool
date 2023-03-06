import { createTeacher, getAllTeachers, getTeacherById } from '../controllers/teacher.controller';
import express from 'express'
import validate from '../middleware/vialdate'
import { createTeacherSchema } from '../schema.zod/teacher.zod';
let router = express.Router()

// read 
router.get('/', getAllTeachers);

// read one teacher by id
router.get('/teacherById/:id', getTeacherById);

// create
router.post('/', validate(createTeacherSchema), createTeacher)

export default router;