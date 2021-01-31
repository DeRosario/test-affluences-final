export default class ReservationsModel {

    constructor(
        private reservations: {
            reservationStart: string,
            reservationEnd: string
        } []
    ) {}

    getReservations() {
        return this.reservations;
    }
}