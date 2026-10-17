/**
 * Environment Configuration
 *
 * Loads environment variables from the .env file and validates them
 * against the environment schema using Zod.
 * Exits the application if any required environment variables are invalid.
 */

import dotenv from "dotenv";
import { z } from "zod";
import { envSchema } from "./env.schema.js";

dotenv.config({
    path: "./.env",
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error(
        "Invalid Environment Credentials...",
        z.treeifyError(parsedEnv.error)
    );
    process.exit(1);
}

export const env = parsedEnv.data;