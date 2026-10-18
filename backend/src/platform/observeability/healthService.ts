import { checkApiHealth } from "../../app/healthServcice.js"

export const getHealthStatus=async()=>{
    return{
        api: await checkApiHealth()
    }
}