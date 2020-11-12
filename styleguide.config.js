const { resolve } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  title: 'docs-cli',
  components: ['src/components/**/*.vue', 'src/components/**/*.jsx'],
  defaultExample: false,
  serverHost: '0.0.0.0',
  serverPort: 6999,
  assetsDir: '/',
  codeSplit: true,
  copyCodeButton: true,
  // 监视组件的添加和删除
  contextDependencies: [
    resolve(__dirname, 'src/components')
  ],
  // 配置一些公用的数据
  // context: {
  //   _route: 'vue-router'
  // }
  exampleMode: 'collapse',
  locallyRegisterComponents: true


  // ignore: ['**/src/components/NoData/*.vue'], // 跳过某些组件
  // jssThemedEditor: false,
  // defaultExample: true,
  // progressBar: true,
  // styles: {
  //   Editor: {
  //     root: {
  //       isolate: false
  //     }
  //   }
  // },
  // getComponentPathLine (componentPath) {
  //   return componentPath.replace(/\\/g, '/')
  // },
  // copyCodeButton: true,
  // styleguideDir: 'qfang-saas-common', // 编译输出文件夹
  // usageMode: 'expand',
  // exampleMode: 'collapses', // 代码是否展开
  // require: [
  //   path.join(__dirname, 'styleguide/vsc-prism.css'),
  //   path.join(__dirname, 'styleguide/global.requires.js')
  // ],

  // webpackConfig: require('./webpack.config.js'),
  // webpackConfig: {
  //   devServer: {
  //     proxy: {
  //       // 设置代理
  //       '/saas-oa-web': {
  //         target: 'http://192.168.0.97',
  //         changeOrigin: true,
  //         pathRewrite: { '^/api': '' }
  //       }
  //     }
  //   },
  //   module: {
  //     rules: [
  //       // Vue loader
  //       {
  //         test: /\.vue$/,
  //         exclude: /node_modules/,
  //         loader: 'vue-loader'
  //       },
  //       // Babel loader, will use your project’s .babelrc
  //       {
  //         test: /\.js?$/,
  //         exclude: /node_modules/,
  //         loader: 'babel-loader'
  //       },
  //       // Other loaders that are needed for your components
  //       {
  //         test: /\.css$/,
  //         loader: 'style-loader!css-loader'
  //       },
  //       {
  //         test: /\.(ttf|eot|woff|woff2|svg)$/,
  //         loader: 'file-loader',
  //         options: {
  //           name: 'fonts/[name].[ext]'
  //         }
  //       },
  //       {
  //         test: /\.scss$/,
  //         loader: ['style-loader', 'css-loader', 'sass-loader'],
  //         exclude: /node_modules/
  //       },
  //       {
  //         test: /\.gif$/,
  //         loader: 'file-loader',
  //         options: {
  //           name: 'images/[name].[ext]'
  //         }
  //       }
  //     ]
  //   },
  //   plugins: [
  //     // add vue-loader plugin
  //     new VueLoaderPlugin()
  //   ]
  // },
  // renderRootJsx: path.join(__dirname, 'styleguide/styleguide.root.js')
}
