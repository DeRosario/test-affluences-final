import ReservationsDAO from "./dao/reservations.DAO";
import ReservationsDAOImpl from "./reservation-service/reservations.DAO.Impl";

export default abstract class DAOFactory {
    static getReservationsDAO(): ReservationsDAO {
        return new ReservationsDAOImpl();
    }
}