import {hash} from 'bcrypt';
import {prisma} from '../../../../database/prismaClient';

interface ICreateDeliveryMan {
  username: string,
  password: string
}

export class CreateDeliveryManUseCase {
  async execute({username, password}: ICreateDeliveryMan) {
    const userExists = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    });

    if(userExists) {
      throw new Error('Delivery Man already exists!');
    }

    const hashPassword = await hash(password, 10);

    const deliveryMan = await prisma.deliveryMan.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return deliveryMan;
  }
}
