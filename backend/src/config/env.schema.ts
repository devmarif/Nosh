import {z} from "zod"

export const envSchema = z.object({
    NODE_ENV :z.string(),
    PORT: z.coerce.number()
})

export type ENV = z.infer<typeof envSchema>