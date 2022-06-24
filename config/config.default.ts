import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1655711107610_265';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.html': 'nunjucks',
      },
    },
    io: {
      init: {}, // passed to engine.io
      namespace: {
        '/chat': {
          connectionMiddleware: ['connect','chatjoin'],
          packetMiddleware: ['packet'],
        },
        '/exchange': {
          connectionMiddleware: [],
          packetMiddleware: [],
        },
      },
      // redis: {
      //   host: '127.0.0.1',
      //   port: 6379,
      // },
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
