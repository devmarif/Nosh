/**
 * CORS Configuration
 *
 * Defines the allowed frontend origin and enables credential support
 * for cross-origin requests, such as cookies and authentication sessions.
 */

import { env } from "./env.config.js";

export const corsOptions = {
    origin: env.FRONTEND_URL,
    credentials: true,
};