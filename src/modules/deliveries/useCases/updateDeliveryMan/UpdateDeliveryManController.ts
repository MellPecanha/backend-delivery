import {Request, Response} from 'express';
import {UpdateDeliveryManUseCase} from './UpdateDeliveryManUseCase';

export class UpdateDeliveryManController {
  async handle(req: Request, res: Response) {
    const {id: id_delivery} = req.params;
    const {id_delivery_man} = req;

    const updateDeliveryManUseCase = new UpdateDeliveryManUseCase();

    const update = await updateDeliveryManUseCase.execute({id_delivery, id_delivery_man});

    return res.json(update);
  }
}
