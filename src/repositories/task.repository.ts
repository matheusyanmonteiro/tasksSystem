import { Task } from "@prisma/client";

export interface TaskRepositoryContract {
    findById(id: string): Promise<Task | null>;
    findByTitle(title: string): Promise<Task | null>;
    create(data: Task): Promise<void>;
}