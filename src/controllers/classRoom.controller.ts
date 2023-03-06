import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { ClassRoom } from '@prisma/client';

// READ
export const getAllClasses = async (req:Request,res:Response)=>{
    let classes = await prisma.classRoom.findMany();
    res.json(classes);
};

// CREATE
// CREATE
export const createClass = async (req:Request, res:Response) => {

    try {

        const c_class = req.body as ClassRoom

        await prisma.classRoom.create({
            data: {
                name: c_class.name

            }
        });

        res.json({ message: "class created successfully" });

    } catch(err) {

        res.json(err);
    }

}