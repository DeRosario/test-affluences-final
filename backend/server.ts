import App from './app/app';
import ReservationController from './app/controllers/api/reservation.controller';
import IndexController from './app/controllers/index.controller';

new App(8888, [
    new ReservationController(),
    new IndexController()
]).listen();
