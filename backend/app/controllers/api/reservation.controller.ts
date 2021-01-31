import express from "express";
import Controller from "../controller";
import FormatDateService from "../../services/format-date.service";
import ReservationService from "../../services/reservation.service";
import {
    validationResult,
    query,
    ValidationChain
} from "express-validator";
import DAOFactory from "../../database/DAOFactory";

export default class ReservationController extends Controller {

    validator: ValidationChain[] = [
        query('date').isISO8601().withMessage('date is not a datetime'),
        query('id').isInt().toInt().withMessage('id is not an int'),
        query().custom((value) => {
            if (Object.keys(value).length !== 2) {
                return false;
            }
            return true;
        }).withMessage('Too much parameters')
    ];

    constructor() {
        super('/api/reservation');
        this.router.get(this.path, this.validator, this.getReservation);
    }

    async getReservation(request: express.Request, response: express.Response) {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(404).json(errors)
        }

        const reservationService = new ReservationService();
        const dateUser = request.query.date as string;
        const id = request.query.id as string;
        const dateFormatted = FormatDateService.formatDate(dateUser);
        const idFormatted = parseInt(id);

        const timetablesPlace = await DAOFactory.getReservationsDAO().getTimetables(dateFormatted, idFormatted);

        if (timetablesPlace.getOpen() === undefined || timetablesPlace.getTimetables() === undefined) {
            return response.status(500).json({
                message: 'error in getting place\'s timetables'
            });
        }

        const timetablePlaceOpen = reservationService.checkTimetables(new Date(dateUser), timetablesPlace);

        if (!timetablePlaceOpen.open || !timetablePlaceOpen.openedTimetables) {
            return response.json({
                isAvailable: false
            });
        }

        const reservationsPlace = await DAOFactory.getReservationsDAO().getReservations(dateFormatted, idFormatted)

        if (reservationsPlace.getReservations()=== undefined) {
            return response.status(500).json({
                message: 'error in getting place\'s reservations'
            });
        }

        const alreadyReserved = reservationService.checkReservations(new Date(dateUser), reservationsPlace);

        if (!alreadyReserved) {
            return response.json({
                isAvailable: true
            });
        }
        return response.json({
            isAvailable: false
        });
    }
}