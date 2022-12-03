import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Covid data',
    description: 'Covid data API',
    version: '0 0 0',
    path: '/api',
  },
};

export default (): Config => config;