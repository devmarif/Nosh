/**
 * Express Application Configuration
 *
 * Initializes the Express app and registers middleware for:
 * - JSON and URL-encoded request body parsing.
 * - CORS configuration for cross-origin requests.
 * - Helmet security HTTP headers.
 * - Cookie parsing for accessing cookies from incoming requests.
 */

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { corsOptions } from "../config/cors.js";
import healthRouter from "./healthRoute.js";
import { requestLogger } from "./requestLogger.js";

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger)
app.use(helmet());
app.use(cookieParser());
app.use("/",healthRouter)

export default app;