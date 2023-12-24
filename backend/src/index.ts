import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; // Import body-parser
import apiKeyMiddleware from './middlewares/apiKey';
import corsMiddleware from './middlewares/cors';

const app = express();
const port = process.env.BACKEND_API_PORT;

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(corsMiddleware);
app.use(apiKeyMiddleware); // API-KEY Middleware

const router = express.Router();

app.use(function (req, res, next) {
  console.log('Time:', new Date());
  next();
});

// /api

router.get("/", (req, res) => {
  res.send("Hello World! from GET");
});

router.post("/", (req, res) => {
  res.send("Hello World! from POST");
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});