"use server";

import prisma from "@/lib/db"
import { taskSchema } from "@/schemas";
import { z } from "zod"

export async function cTasks(data: z.infer<typeof taskSchema>) {

    const validatedFields = taskSchema.safeParse(data);
    console.log(validatedFields)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {

        await prisma.Task.create({
            data: {
                name: data.task,
                isCompleted: data.isCompleted
            }
        })

        return {
            success: "Task saved successfully!"
        }

    } catch (error) {
        console.log(error)
    }
}