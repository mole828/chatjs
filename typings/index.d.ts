import 'egg';

declare module 'egg' {
    interface IO extends EggIOServer, EggSocketNameSpace, EggSocketIO {}
}