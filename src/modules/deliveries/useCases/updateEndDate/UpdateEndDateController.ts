import {Request, Response} from 'express';
import {UpdateEndDateUseCase} from './UpdateEndDateUseCase';

export class UpdateEndDateController {
  async handle(req: Request, res: Response) {
    const {id: id_delivery} = req.params;
    const {id_delivery_man} = req;

    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const delivery = await updateEndDateUseCase.execute({id_delivery, id_delivery_man});

    return res.json(delivery);
  }
}
