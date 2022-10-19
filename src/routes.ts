import {Router} from 'express';
import {ensureAuthenticateClient} from './middlewares/ensureAuthenticateClient';
import {ensureAuthenticateDeliveryMan} from './middlewares/ensureAuthenticateDeliveryMan';
import {AuthenticateClientController} from './modules/accounts/authenticateClient/AuthenticateClientController';
import {AuthenticateDeliveryManController} from './modules/accounts/authenticateDeliveryMan/AuthenticateDeliveryManController';
import {CreateClientController} from './modules/clients/useCases/createClient/CreateClientController';
import {FindAllDeliveriesClientController} from './modules/clients/useCases/findAllDeliveriesClient/FindAllDeliveriesClientController';
import {CreateDeliveryController} from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import {FindAllAvailableController} from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import {UpdateDeliveryManController} from './modules/deliveries/useCases/updateDeliveryMan/UpdateDeliveryManController';
import {UpdateEndDateController} from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';
import {CreateDeliveryManController} from './modules/delivery_man/useCases/createDeliveryMan/CreateDeliveryManController';
import {FindAllDeliveriesDeliveryManController} from './modules/delivery_man/useCases/findAllDeliveriesDeliveryMan/FindAllDeliveriesDeliveryManController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const createClientController = new CreateClientController();
const createDeliveryManController = new CreateDeliveryManController();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliveryManController = new UpdateDeliveryManController();
const updateEndDateController = new UpdateEndDateController();
const findAllDeliveriesClientController = new FindAllDeliveriesClientController();
const findAllDeliveriesDeliveryManController = new FindAllDeliveriesDeliveryManController();

routes.post('/client/authenticate', authenticateClientController.handle);
routes.post('/deliveryMan/authenticate', authenticateDeliveryManController.handle);

routes.post('/client', createClientController.handle);
routes.post('/deliveryMan', createDeliveryManController.handle);

routes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle);
routes.get('/delivery/available', ensureAuthenticateDeliveryMan, findAllAvailableController.handle);

routes.put('/delivery/updateDeliveryMan/:id', ensureAuthenticateDeliveryMan, updateDeliveryManController.handle);
routes.put('/delivery/updateEndDate/:id', ensureAuthenticateDeliveryMan, updateEndDateController.handle);

routes.get('/client/deliveries', ensureAuthenticateClient, findAllDeliveriesClientController.handle);
routes.get('/deliveryMan/deliveries', ensureAuthenticateDeliveryMan, findAllDeliveriesDeliveryManController.handle);

export {routes};
