const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const customRoutes = {
  '/pages/index/index': '/index',
  '/pages/panel/index': '/panel',
  // basic
  '/pages/basic/icon/index': '/basic/icon',
  '/pages/basic/button/index': '/basic/button',
  '/pages/basic/color/index': '/basic/color',
  '/pages/basic/typo/index': '/basic/typo',
  // view
  '/pages/view/noticebar/index': '/view/noticebar',
  '/pages/view/badge/index': '/view/badge',
  '/pages/view/tag/index': '/view/tag',
  '/pages/view/avatar/index': '/view/avatar',
  '/pages/view/article/index': '/view/article',
  '/pages/view/timeline/index': '/view/timeline',
  '/pages/view/swiper/index': '/view/swiper',
  '/pages/view/load-more/index': '/view/load-more',
  '/pages/view/divider/index': '/view/divider',
  '/pages/view/countdown/index': '/view/countdown',
  '/pages/view/steps/index': '/view/steps',
  '/pages/view/curtain/index': '/view/curtain',
  // action
  '/pages/action/toast/index': '/action/toast',
  '/pages/action/modal/index': '/action/modal',
  '/pages/action/progress/index': '/action/progress',
  '/pages/action/action-sheet/index': '/action/action-sheet',
  '/pages/action/swipe-action/index': '/action/swipe-action',
  '/pages/action/activity-indicator/index': '/action/activity-indicator',
  '/pages/action/message/index': '/action/message',
  // navigation
  '/pages/navigation/drawer/index': '/navigation/drawer',
  '/pages/navigation/pagination/index': '/navigation/pagination',
  '/pages/navigation/tabs/index': '/navigation/tabs',
  '/pages/navigation/tabbar/index': '/navigation/tabbar',
  '/pages/navigation/segmented-control/index': '/navigation/segmented-control',
  '/pages/navigation/navbar/index': '/navigation/navbar',
  '/pages/navigation/indexes/index': '/navigation/indexes',
  // layout
  '/pages/layout/flex/index': '/layout/flex',
  '/pages/layout/grid/index': '/layout/grid',
  '/pages/layout/float-layout/index': '/layout/float-layout',
  '/pages/layout/card/index': '/layout/card',
  '/pages/layout/list/index': '/layout/list',
  '/pages/layout/accordion/index': '/layout/accordion',
  // form
  '/pages/form/form/index': '/form/form',
  '/pages/form/checkbox/index': '/form/checkbox',
  '/pages/form/input/index': '/form/input',
  '/pages/form/input-number/index': '/form/input-number',
  '/pages/form/radio/index': '/form/radio',
  '/pages/form/textarea/index': '/form/textarea',
  '/pages/form/switch/index': '/form/switch',
  '/pages/form/rate/index': '/form/rate',
  '/pages/form/picker/index': '/form/picker',
  '/pages/form/picker-view/index': '/form/picker-view',
  '/pages/form/slider/index': '/form/slider',
  '/pages/form/search-bar/index': '/form/search-bar',
  '/pages/form/image-picker/index': '/form/image-picker',
  '/pages/form/range/index': '/form/range',
  // advanced
  '/pages/advanced/calendar/index': '/advanced/calendar',
  '/pages/advanced/virtual-scroll/index': '/advanced/virtual-scroll',
  '/pages/advanced/skeleton/index': '/advanced/skeleton'
}

const config = {
  projectName: 'taro-ui-vue3',
  date: '2020-10-17',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: true
  },
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/style': path.resolve(__dirname, '..', 'src/style'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    // 'taro-ui-vue3$': "taro-ui-vue3/lib"
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/taro-vue3/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui-vue3'],
    output: {
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    chunkDirectory: 'chunks',
    router: {
      mode: 'hash',
      basename: '/',
      customRoutes
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    enableExtract: true,
    miniCssExtractPluginOption: {
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    },
    imageUrlLoaderOption: {
      limit: true,
      encoding: true,
      mimetype: 'image/png',
      esModule: true
    },
    fontUrlLoaderOption: {
      limit: true,
      encoding: true,
      mimetype: true,
      esModule: true
    },
    webpackChain(chain) {
      chain.merge({
        resolve: {
          alias: {
            '@tarojs/components$': '@tarojs/components/dist-h5/vue3/index.js'
          }
        },
        optimization: {
          splitChunks: {
            chunks: 'all',
          },
          usedExports: true,
          minimize: true
        },
        module: {
          rules: [
            {
              include: path.resolve('node_modules', 'taro-ui-vue3'),
              sideEffects: false
            }
          ]
        }
      })
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
