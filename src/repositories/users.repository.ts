import { User } from "@prisma/client";

export interface UsersRepositoyContract {
    create(data: User): Promise<void>;
}