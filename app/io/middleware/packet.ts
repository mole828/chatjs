import { Context } from 'egg';
export default function() {
  return async (_ctx:Context, next:()=>Promise<any>) => {
    console.log('packet:', _ctx.packet);
    await next();
  };
}
