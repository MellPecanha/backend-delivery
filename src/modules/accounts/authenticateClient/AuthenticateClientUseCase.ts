import {prisma} from '../../../database/prismaClient';
import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken';

interface IAuthenticateClient {
  username: string;
  password: string
}

export class AuthenticateClientUseCase {
  async execute({username, password}: IAuthenticateClient) {
    const client = await prisma.client.findFirst({
      where: {
        username
      }
    });

    if(!client) {
      throw new Error(`Username or password invalid!`);
    }

    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch) {
      throw new Error(`Username or password invalid!`);
    }

    const token = sign(
      {username},
      'b5486dcaf4cfc9c002f86209802ba582',
      {
        subject: client.id,
        expiresIn: '1h'
      }
    );

    return token;
  }
}
