import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


import authRoutes from './src/routes/authRoutes';
import repositoryRoutes from './src/routes/repositoryRoutes';
import userRoutes from './src/routes/userRoutes';
import followerRoutes from './src/routes/followerRoutes';

const whiteList = ['http://localhost:3000', 'http://localhost:3333'];

const corsOptions = {
    origin(origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};


class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', authRoutes);
        this.app.use('/repositories', repositoryRoutes);
        this.app.use('/users', userRoutes);
        this.app.use('/followers', followerRoutes);
    }

}



export default new App().app;