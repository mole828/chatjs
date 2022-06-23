import { Application ,Context, } from "egg"
import {pool} from "../controller/chat"
export default function(app:Application,){
    const {logger} = app;
    logger.error('middleware.connect init');
    return async (ctx:Context, next: ()=>Promise<any>)=>{
        const {socket} = ctx;
        
        {
            const before = [...pool].length
            pool.add(socket);
            console.log(`${
                socket.id
            } join chat, ${before}=>${
                [...pool].length
            }`);
        }
        
        await next();
        {
            const before = [...pool].length
            pool.delete(socket);
            console.log(`${
                socket.id
            } out chat, ${before}=>${
                [...pool].length
            }`);
        }
    }
}