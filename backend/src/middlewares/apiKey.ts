import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config(); // loda environment vars from .env-file

const apiKeyWhitelist: string[] = process.env.API_KEY_WHITELIST?.split(',') || [];

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey: string | undefined = req.headers['x-api-key'] as string | undefined;

  console.log(`Requesting ${req.path} with apiKey: ${apiKey}`);

  if (!apiKey || !apiKeyWhitelist.includes(apiKey)) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  // Wenn der API-Key in der Whitelist enthalten ist, setze den überprüften Schlüssel in das Anfrageobjekt für spätere Verwendungszwecke
  (req as any).validatedApiKey = apiKey;
  next();
};

export default apiKeyMiddleware;
