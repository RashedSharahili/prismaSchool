import { createClass, getAllClasses } from '../controllers/classRoom.controller';
import express from 'express'
import validate from '../middleware/vialdate'
import { createClassRoomSchema } from '../schema.zod/classRoom.zod';
let router = express.Router()

// read 
router.get('/', getAllClasses);

// create 
router.post('/', createClass)

export default router;