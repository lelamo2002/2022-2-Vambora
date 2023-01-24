import { container } from "tsyringe"
import { IUsersRepository } from "../repositories/IUsersRepository"
import { PrismaUsersRepository } from "../repositories/infra/prisma/PrismaUsersRepository"
import { GenerateRefreshToken } from "../adapters/GenerateRefreshToken"
import { GenerateToken } from "../adapters/GenerateToken"

container.registerSingleton<IUsersRepository>("UsersRepository", PrismaUsersRepository)

container.registerInstance("GenerateToken", GenerateToken)
container.registerInstance("GenerateRefreshToken", GenerateRefreshToken)