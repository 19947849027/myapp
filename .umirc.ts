import { defineConfig } from 'umi';
import routes from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  //路由
  routes,
  fastRefresh: {},
 
  // proxy: {
  //   '/api': {
  //     'target': 'http://public-api-v1.aspirantzhang.com/users',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
});
