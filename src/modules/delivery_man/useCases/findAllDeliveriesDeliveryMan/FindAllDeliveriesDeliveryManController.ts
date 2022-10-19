import {Request, Response} from 'express';
import {FindAllDeliveriesDeliveryManUseCase} from './FindAllDeliveriesDeliveryManUseCase';

export class FindAllDeliveriesDeliveryManController {
  async handle(req: Request, res: Response) {
    const {id_delivery_man} = req;

    const findAllDeliveriesDeliveryManUseCase = new FindAllDeliveriesDeliveryManUseCase();

    const deliveries = await findAllDeliveriesDeliveryManUseCase.execute(id_delivery_man);

    return res.json(deliveries);
  }
}
