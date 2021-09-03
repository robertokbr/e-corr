import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import compression from 'compression';

import upload from '@config/upload';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';
import appError from './middleware/appError';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(helmet());
app.use(compression());
app.use(appError);

app.use('/files', express.static(upload.uploadFolder));

export { app };
