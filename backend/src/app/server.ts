
import { env } from "../config/env.config.js"
import { logger } from "../config/logger.js"
import app from "./app.js"

export const createServer=()=>{
    const port =env.PORT
    const server = app.listen(port,()=>{
        logger.info(`Server is running  at port ${port}`)
    })
    return server
}