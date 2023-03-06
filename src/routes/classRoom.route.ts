import { createClass, getAllClasses, getClassById } from '../controllers/classRoom.controller';
import express from 'express'
import validate from '../middleware/vialdate'
import { createClassRoomSchema } from '../schema.zod/classRoom.zod';
let router = express.Router()

// read 
router.get('/', getAllClasses);

// read one class by id
router.get('/classById/:id', getClassById);

// create 
router.post('/', validate(createClassRoomSchema), createClass)

export default router;