// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportControllerChat from '../../../app/io/controller/chat';
import ExportMiddlewareChatjoin from '../../../app/io/middleware/chatjoin';
import ExportMiddlewareConnect from '../../../app/io/middleware/connect';
import ExportMiddlewarePacket from '../../../app/io/middleware/packet';

declare module 'egg' {
  interface Application {
    io: IO;
  }

  interface IO {
    controller: {
      chat: ExportControllerChat;
    }
    middleware: {
      chatjoin: ExportMiddlewareChatjoin;
      connect: ExportMiddlewareConnect;
      packet: ExportMiddlewarePacket;
    }
  }
}
