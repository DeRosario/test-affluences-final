import express from 'express';
import Controller from './controllers/controller';

export default class App {

    app: express.Application;

    constructor(private port: number, controllers: Controller[]) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    initializeMiddlewares() {
        this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    }
}