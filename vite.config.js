// import * as path from 'path';
import { UserConfig } from 'vite'
// import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default {
  plugins: [],
  server: {
    // open: true,
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
      // fix less import by: @import ~
      // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: '' },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        // modifyVars: { 'primary-color': '#13c2c2' },
        javascriptEnabled: true,
      },
    },
  },
}
