import { Task } from "@prisma/client";

export interface TaskRepositoryContract {
    create(data: Task): Promise<void>;
}