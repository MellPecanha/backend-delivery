import {prisma} from '../../../../database/prismaClient';

export class FindAllDeliveriesDeliveryManUseCase {
  async execute(id_delivery_man: string) {
    const deliveries = await prisma.deliveryMan.findMany({
      where: {
        id: id_delivery_man
      },
      select: {
        id: true,
        username: true,
        deliveries: true
      }
    });

    return deliveries;
  }
}
