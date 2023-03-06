import { getAllTeachers } from '../controllers/teacher.controller';
import express from 'express'
import validate from '../middleware/vialdate'
// import { createClassRoomSchema } from '../schema.zod/teacher.zod';
let router = express.Router()

// read 
router.get('/', getAllTeachers);

export default router;