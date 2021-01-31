export default class TimetablesModel {

    constructor(
        private open: boolean,
        private timetables: {
            opening: string,
            closing: string
        } []
    ) {}

    getOpen() {
        return this.open;
    }

    getTimetables() {
        return this.timetables;
    }
}