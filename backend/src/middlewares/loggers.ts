import { Request, Response, NextFunction } from 'express';

const errorLogger = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const errorMessage = err.message;
  const statusCode = res.locals.statusCode || 500; // Default status: 500 Internal Server Error
  
  console.error(`[${new Date().toLocaleTimeString()}] [ERROR] ${err.message}`); // Hier wird der Fehler in der Konsole protokolliert oder an ein Log-System gesendet

  res.status(statusCode).json({ error: errorMessage });
};


// Logger Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.info(`[${new Date().toLocaleTimeString()}] [${req.method} ${req.path}] ${JSON.stringify(req.body)}`);
  next();
};


export { errorLogger, logger };