import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Load environment vars from .env-file

const apiKeyWhitelist: string[] = process.env.API_KEY_WHITELIST?.split(',') || [];

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey: string | undefined = req.headers['x-api-key'] as string | undefined;

  console.log(`[${new Date().toLocaleTimeString()}] [API-Key: ${apiKey}]`);

  if (!apiKey || !apiKeyWhitelist.includes(apiKey)) {
    const error = new Error('Unauthorized API-Key');
    res.locals.statusCode = 403;

    return next(error); // Passing error to be handled by the next middleware or error handler
  }

  // If the API key is included in the whitelist, set the checked key in the request object for later use
  (req as any).validatedApiKey = apiKey;
  next();
};

export default apiKeyMiddleware;
