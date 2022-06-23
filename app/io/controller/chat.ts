import { Context, Controller } from "egg";
import { Socket } from "net";
export const pool = new Set<Socket>();

export default class ChatController extends Controller {
   constructor(ctx:Context){
      super(ctx);
      console.log('ChatController build')
   }
   
   public async msg() {
      const {ctx} = this;
      const [message] = ctx.args;
      const {socket} = ctx;
      const ss = [...pool];
      ss.forEach(s => {
         s.emit('msg', {
            name: socket.id,
            val: message,
         })
      });
   };
   
}