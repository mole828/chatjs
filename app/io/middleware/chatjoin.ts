import { Application, Context } from 'egg';
import { Socket } from 'net';
// import { pool } from '../controller/chat';
export const pool = new Set<Socket>();
export default function(app:Application) {
  const { logger } = app;
  
  logger.error('middleware.chatjoin init');
  return async (ctx:Context, next: ()=>Promise<any>) => {
    const { socket, logger, } = ctx;
    
    {
      const before = [ ...pool ].length;
      pool.add(socket);
      logger.info(`${
        socket.id
      } join chat, ${before}=>${
        [ ...pool ].length
      }`);
    }

    await next();
    {
      const before = [ ...pool ].length;
      pool.delete(socket);
      logger.info(`${
        socket.id
      } out chat, ${before}=>${
        [ ...pool ].length
      }`);
    }
  };
}
