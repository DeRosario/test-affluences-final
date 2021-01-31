import ReservationsModel from '../database/models/reservations.model';
import TimetablesModel from '../database/models/timetables.model';

export default class ReservationService {
    constructor() {}

    checkTimetables(dateUser: Date, timetablesPlace: TimetablesModel) {
        let openedTimetables: boolean = false;

        timetablesPlace.getTimetables().forEach(timetable => {
            if (dateUser >= new Date(timetable.opening) && dateUser < new Date(timetable.closing)) {
                openedTimetables = true;
            }
        });

        return {
            openedTimetables,
            open: timetablesPlace.getOpen()
        };
    }

    checkReservations(dateUser: Date, reservationsPlace: ReservationsModel) {
        let alreadyReserved = false;
        reservationsPlace.getReservations().forEach(reservation => {
            if (dateUser >= new Date(reservation.reservationStart) && dateUser <= new Date(reservation.reservationEnd)) {
                alreadyReserved = true;
            }
        });
        return alreadyReserved;
    }

}