import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Lade Umgebungsvariablen aus .env-Datei

const corsWhitelist: string[] = process.env.CORS_WHITELIST?.split(',') || [];

const corsOptions: cors.CorsOptions = {
  origin: function (origin, callback) {
    if (corsWhitelist.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Access not allowed'));
    }
  }
};

const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Füge die CORS-Header zu allen Anfragen hinzu
  const corsHandler = cors(corsOptions);
  corsHandler(req, res, next);
};

export default corsMiddleware;
