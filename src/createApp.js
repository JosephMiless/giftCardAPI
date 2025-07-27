import express from 'express';
import { routes } from './utils/routes.js';
import cookieParser from 'cookie-parser';
import { tables } from "./utils/tables.js";

export const createApp = async () => {
    const app = express();

    app.use(cookieParser());
    app.use(express.json());

    app.use(routes)

    await tables();

    return app;
};