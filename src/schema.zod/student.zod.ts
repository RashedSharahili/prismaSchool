import { TypeOf, z } from "zod";
import { Major } from "@prisma/client";

const major = ["IT","CS", "SE"] as const

export const createStudentSchema = z.object({

    body: z.object({
        name: z.string({
            required_error: "name is required!",
            invalid_type_error: "set string for name feild"
            
        }).min(2, "name must be more than 2 characters"),
        age: z.number({

            required_error: "age is required!",
            invalid_type_error: "set number for age feild"

        }).min(7, "your age must be 7 or more").max(120, "Are you Dinosaur?"),
        major: z.enum(major)
    })
});

export type CreateStudentSchema = TypeOf<typeof createStudentSchema>["body"];