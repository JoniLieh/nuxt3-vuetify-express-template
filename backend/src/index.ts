import express, { NextFunction } from "express";
import bodyParser from "body-parser"; // Import body-parser
import apiKeyMiddleware from './middlewares/apiKey';
import { setCorsHeaders as setCorsHeadersMiddleware, corsOrigin as corsOriginMiddleware } from './middlewares/cors';
import { errorLogger as errorLoggerMiddleware, logger as loggerMiddleware } from './middlewares/loggers';
import rateLimitMiddleware from './middlewares/rateLimit';

const app = express();
const port = process.env.BACKEND_API_PORT;

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(loggerMiddleware);
app.use(rateLimitMiddleware);

app.use(setCorsHeadersMiddleware); // before any requests
app.use(corsOriginMiddleware); // cors origin Middleware

app.use(apiKeyMiddleware); // API-KEY Middleware

const router = express.Router();

// /api

router.get("/", (req, res) => {
  res.send("Hello World! from GET");
});

router.post("/", (req, res) => {
  res.send("Hello World! from POST");
});

app.use('/api', router);

app.use(errorLoggerMiddleware); // error logger, last one in chain
app.listen(port, () => {
  console.debug(`Listening on port ${port}...`);
});