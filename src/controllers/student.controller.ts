import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { Student } from '@prisma/client';

// READ
export const getAllStudents = async (req:Request,res:Response)=>{
    let students = await prisma.student.findMany();
    res.json(students);
};

// READ ONE STUDENT BY ID
export const getStudentById = async (req:Request,res:Response)=>{

    const { id } = req.params

    try {

        let user = await prisma.student.findFirst({

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
export const createStudent = async (req:Request, res:Response) => {

    try {

        const c_student = req.body as Student

        await prisma.student.create({
            data: {
                name: c_student.name,
                age: c_student.age,
                major: c_student.major

            }
        });

        res.json({ message: "student created successfully" });

    } catch(err) {

        res.json(err);
    }

}
