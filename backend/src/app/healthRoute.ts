import express from "express"
import {HealthController} from "../app/healthController.js"
const healthRouter = express.Router();
const healthController = new  HealthController();
healthRouter.get("/live", healthController.live)
healthRouter.get("/health",healthController.health)


export default healthRouter;