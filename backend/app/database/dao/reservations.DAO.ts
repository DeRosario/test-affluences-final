import ReservationsModel from "../models/reservations.model";
import TimetablesModel from "../models/timetables.model";

export default interface ReservationsDAO {

    getTimetables(dateFormatted: string, idFormatted: number): Promise<TimetablesModel>;

    getReservations(dateFormatted: string, idFormatted: number): Promise<ReservationsModel>;
}