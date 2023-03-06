import { TypeOf, z } from "zod";

export const createClassRoomSchema = z.object({

    body: z.object({

        name: z.string({
            required_error: "name is required!",
            invalid_type_error: "set string for name feild"

        }).min(3, "name must more than 2 characters")
    })
});

export type CreateClassRoomSchema = TypeOf<typeof createClassRoomSchema>["body"];