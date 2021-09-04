import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';

export default function appError(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) {
  console.error(error);

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server error',
  });
}
