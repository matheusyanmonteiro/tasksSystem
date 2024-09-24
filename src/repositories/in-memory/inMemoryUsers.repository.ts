import { User } from "@prisma/client";

export class InMemoryUsersRepository {
    private users: User[] = [];
}