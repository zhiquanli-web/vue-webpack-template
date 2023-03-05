const { defineConfig } = require('@vue/cli-service');

const AutoImport = require('unplugin-auto-import/webpack');
const AutoComponent = require('unplugin-vue-components/webpack');
const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');
const { FileSystemIconLoader } = require('unplugin-icons/loaders');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  publicPath: '/',
  configureWebpack: {
    plugins: [
      AutoImport({
        dts: './typing/auto.import.d.ts',
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
        },
      }),
      AutoComponent({
        dts: false,
        resolvers: [
          IconsResolver({
            componentPrefix: 'icon',
            customCollections: ['sy'],
          }),
        ],
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        customCollections: {
          sy: FileSystemIconLoader('src/assets/svgs', (svg) => {
            return svg.replace(/^<svg /, '<svg fill="currentColor" ');
          }),
        },
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/styles/mixins.scss" as *;`,
      },
    },
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
