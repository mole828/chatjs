import { Application, Context } from 'egg';
export default function(_app:Application) {
  // const { logger } = app;
  // logger.error('middleware.connect init');
  return async (_ctx:Context, next: ()=>Promise<any>) => {
    // const {socket} = ctx;
    //console.log('connected!');
    // socket.emit('res', 'connnected!');
    await next();
    // socket.emit('res','disconnection!')
    //console.log('disconnection!');
  };
}
