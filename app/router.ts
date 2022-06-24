import { Application, } from "egg";

export default (app:Application) => {
  const { logger, io, } = app;

  const chat = io.of('/');
  chat.route('msg', io.controller.chat.msg);

  logger.error('router init')
};
