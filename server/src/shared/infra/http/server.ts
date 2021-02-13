import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import AppError from '@shared/errors/AppError';

import '@shared/infra/typeorm/index';
import routes from './routes';

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server error',
  });
});

app.listen(PORT, () => {
  console.log(`Server is connected on the port ${PORT}`);
});
