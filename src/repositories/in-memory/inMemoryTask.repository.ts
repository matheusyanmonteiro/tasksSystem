import { Task } from "@prisma/client";

export class InMemoryTaskRepository {
    private tasks: Task[] = [];
}