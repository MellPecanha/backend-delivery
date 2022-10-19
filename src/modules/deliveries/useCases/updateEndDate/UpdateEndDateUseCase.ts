import {prisma} from '../../../../database/prismaClient';

interface IUpdateEndDate {
  id_delivery: string;
  id_delivery_man: string
}

export class UpdateEndDateUseCase {
  async execute({id_delivery, id_delivery_man}: IUpdateEndDate) {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_delivery_man
      },
      data: {
        end_at: new Date()
      }
    });

    return delivery;
  }
}
