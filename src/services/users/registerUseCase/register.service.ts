import { User } from "@prisma/client";
import { UsersRepositoyContract } from "src/repositories/users.repository";


export interface RegisterServiceRequest {
    name: string;
    email: string;
    password: string;
}

export interface RegisterServiceResponse {
    user: User;
}

export class RegisterServiceUserCase {
   constructor (private usersRepository: UsersRepositoyContract) {}

   async execute({
    name,
    email,
    password
   }: RegisterServiceRequest): Promise<RegisterServiceResponse> {

    const user = await this.usersRepository.create({
        name,
        email,
        password
    })

    return {
        user,
    };

   }
}