import { Context, Controller } from 'egg';
// import { Socket } from 'net';
// export const pool = new Set<Socket>();

import {pool} from '../middleware/chatjoin';

export default class ChatController extends Controller {
  constructor(ctx:Context) {
    super(ctx);
    const {app}=ctx;
    app.messenger.once('msg',(message:string)=>{
      const {socket} = ctx;
      const ss = [ ...pool ];
      ss.forEach(s => {
        s.emit('msg', {
          name: socket.id,
          val: message,
        });
      });
      this.logger.info(`send '${message}' to ${ss.length} client`);
    });
    app.logger.warn('controller/chat.ts init')
  }

  public async msg() {
    const { ctx, app, } = this;

    const [ message ] = ctx.args;

    app.messenger.sendToApp('msg',message)

    const {session} = this.ctx;
    session.sendTime = session.sendTime?session.sendTime+1:1;
    // this.logger.info(`session.sendTime: ${session.sendTime}`);
  }

}
