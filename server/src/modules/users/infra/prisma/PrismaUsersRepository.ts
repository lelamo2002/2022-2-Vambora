import { User } from '@prisma/client';
import { prisma } from '../../../../prisma';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class PrismaUsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    const { email, name, enrollment, password, verificationCode } = data;

    const user = await prisma.user.create({
      data: {
        email,
        name,
        enrollment,
        password,
        verificationCode,
      },
    });

    return user;
  }

  async findUser(email: string): Promise<User | null> {
    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return userExists;
  }

  async findUserById(user_id: string): Promise<User | null> {
    const userExists = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
    });

    return userExists;
  }

  async getVerificationCode(user_id: string): Promise<number | null> {
    const user = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
    });

    return user?.verificationCode || null;
  }

  async verifyUser(user_id: string): Promise<void> {
    await prisma.user.update({
      where: {
        id: user_id,
      },
      data: {
        isVerified: true,
      },
    });
  }

  async updateUser(user_id: string, email: string, name: string, enrollment: string): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id: user_id,
      },
      data: {
        email,
        name,
        enrollment,
      }
    })

    return user;
  }

  async deleteUser(user_id: string): Promise<void> {
      await prisma.user.delete({
        where: {
          id: user_id
        }
      })
  }
}

export { PrismaUsersRepository };
