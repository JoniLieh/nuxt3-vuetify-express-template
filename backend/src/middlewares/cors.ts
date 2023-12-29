import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file
const corsWhitelist: string[] = process.env.CORS_WHITELIST?.split(',') || [];


const setCorsHeaders = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin as string;

  // Setzen der CORS-Header in der Antwort
  if (corsWhitelist.includes(origin)) {
    // Der aktuelle Ursprung ist in der Whitelist, erlaube den Zugriff
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Der Ursprung ist nicht in der Whitelist, keine Erlaubnis für den Zugriff
    res.setHeader('Access-Control-Allow-Origin', ''); // Setze den Header auf leer für eine fehlerhafte Anfrage
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Weiterleiten an die nächste Middleware oder den nächsten Handler
  next();
};


// GET ignores origin
const corsOptions: cors.CorsOptions = {
  origin: function (origin, callback) {
    if (corsWhitelist.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      const error = new Error('Unauthorized Origin');
      callback(error);
    }
  }
};

const corsOrigin = (req: Request, res: Response, next: NextFunction) => {
  const corsHandler = cors(corsOptions);

  // Handle errors from corsHandler middleware
  corsHandler(req, res, (err) => {
    if (err) {
      res.locals.statusCode = 403
      next(err); // Proceed to next error middleware
    } else {
      next(); // Proceed to the next middleware or route handler
    }
  });
};

export { setCorsHeaders, corsOrigin };
