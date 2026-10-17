/**
 * Environment Variables Schema
 *
 * Defines and validates the required environment variables using Zod.
 * Coerces PORT into a number and validates FRONTEND_URL as a valid URL.
 * Exports the inferred TypeScript type for the environment configuration.
 */

import { z } from "zod";

export const envSchema = z.object({
    NODE_ENV: z.string(),
    PORT: z.coerce.number(),
    FRONTEND_URL: z.url(),
});

export type ENV = z.infer<typeof envSchema>;