import App from './app/app';
import ReservationController from './app/controllers/api/reservation.controller';

new App(8888, [
    new ReservationController()
]).listen();