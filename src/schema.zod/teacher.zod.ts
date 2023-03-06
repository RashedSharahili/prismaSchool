import { TypeOf, z } from "zod";

export const createTeacherSchema = z.object({

    body: z.object({
        name: z.string({
            required_error: "name is required!",
            invalid_type_error: "set string for name feild"
        })
    })
});

export type CreateTeacherSchema = TypeOf<typeof createTeacherSchema>["body"];