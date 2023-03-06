import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { Teacher } from '@prisma/client';

// READ
export const getAllTeachers = async (req:Request,res:Response)=>{
    let teachers = await prisma.classRoom.findMany();
    res.json(teachers);
};