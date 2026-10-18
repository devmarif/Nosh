import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../shared/utils/catchAsync.js";
import { getHealthStatus } from "../platform/observeability/healthService.js";

export class HealthController {
  live = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      success: true,
      message: "Alive",
      timestamp: new Date().toISOString(),
    });
  });
  health=catchAsync(async (req:Request,res:Response,next:NextFunction)=>{
    const services =  await getHealthStatus();
    return res.status(200).json({
        success:true,
        status:"Ready",
        services,
        timestamp:new Date().toISOString()
    })
  })
}
