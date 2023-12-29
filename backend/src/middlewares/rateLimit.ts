import { Request, Response, NextFunction } from 'express';

// Data structure to store requests per IP
const requestCounts: Record<string, number> = {};
// Rate limit configuration: Limit to 10 requests per 1 minute
const limit = 45;
const interval = 60000; // 1 minute in milliseconds

const rateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const clientIP = req.ip || '127.0.0.1'; // Client's IP address || Use a default IP address if clientIP is undefined


  // If the IP exists in requestCounts and the number of requests is greater than the limit
  if (requestCounts[clientIP] && requestCounts[clientIP] >= limit) {
    const err = new Error('Rate limit exceeded')
    res.locals.statusCode = 429; // 429 Too Many Requests

    return next(err); // Proceed to next error middleware
  }

  // Increment the request count for this IP
  requestCounts[clientIP] = requestCounts[clientIP] ? requestCounts[clientIP] + 1 : 1;

  // Set a timer to reset the request count after the time interval
  setTimeout(() => {
    requestCounts[clientIP] = 0; // Reset the request count
  }, interval);

  next(); // Proceed to the next middleware or route
};

export default rateLimitMiddleware;
