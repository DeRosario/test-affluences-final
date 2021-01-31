import RequestService from "../../services/request.service";
import ReservationsDAO from "../dao/reservations.DAO";
import ReservationsModel from "../models/reservations.model";
import TimetablesModel from "../models/timetables.model";

export default class ReservationsDAOImpl implements ReservationsDAO {

    constructor() {}

    async getTimetables(dateFormatted: string, idFormatted: number): Promise < TimetablesModel > {
        const data = await RequestService.doRequest(`http://reservation-service:8080/timetables?date=${dateFormatted}&resourceId=${idFormatted}`, 'GET');
        return this.parseOutTimetables(data);
    }

    async getReservations(dateFormatted: string, idFormatted: number): Promise < ReservationsModel > {
        const data = await RequestService.doRequest(`http://reservation-service:8080/reservations?date=${dateFormatted}&resourceId=${idFormatted}`, 'GET');
        return this.parseOutReservations(data);
    }

    parseOutTimetables(
        data: {
            open: boolean,
            timetables: {
                opening: string,
                closing: string
            } []
        }) {
        return new TimetablesModel(data.open, data.timetables);
    }

    parseOutReservations(
        data: {
            reservations: {
                reservationStart: string,
                reservationEnd: string
            }[]
        }
    ) {
        return new ReservationsModel(data.reservations);
    }


}