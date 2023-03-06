import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { Teacher } from '@prisma/client';

// READ
export const getAllTeachers = async (req:Request,res:Response)=>{
    let teachers = await prisma.teacher.findMany();
    res.json(teachers);
};

// READ ONE TEACHER BY ID
export const getTeacherById = async (req:Request,res:Response)=>{

    const { id } = req.params

    try {

        let user = await prisma.teacher.findFirst({

            where: {
                id: id
            }
        });

        res.json(user);

    } catch(err) {

        res.json(err);
    }
};

// CREATE
export const createTeacher = async (req:Request, res:Response) => {

    try {

        const c_teacher = req.body as Teacher

        await prisma.teacher.create({
            data: {
                name: c_teacher.name
            }
        });

        res.json({ message: "teacher created successfully" });

    } catch(err) {

        res.json(err);
    }

}