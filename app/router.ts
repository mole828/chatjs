import { Application, } from "egg";

export default (app:Application) => {
  const { logger, controller , router, io, } = app;

  router.get('/', controller.home.index);

  const chat = io.of('/chat');
  chat.route('msg', io.controller.chat.msg);

  logger.error('router init')
};
