var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin') // 单独打包css
var HtmlWebpackPlugin = require('html-webpack-plugin') // HTML文件处理
  // var OpenBrowserPlugin = require('open-browser-webpack-plugin')
  // var CleanPlugin = require('clean-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin // 单独打包公共模块插件
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin') // 按需加载lodash
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin //依赖大小分析
var CompressionPlugin = require("compression-webpack-plugin") //Gzip压缩

var prod = process.env.NODE_ENV === 'production'
var out_path = prod ? './dist' : './build'

module.exports = {
    devtool: 'eval',
    entry: {
      index: path.join(__dirname, 'src/app/index.js'),
      vendors: ['react', 'react-dom', 'moment', 'babel-polyfill', 'axios'] //第三方库
    },
    output: {
      path: path.join(__dirname, out_path),
      filename: prod ? 'js/[name].min.js' : 'js/[name].js',
      chunkFilename: prod ? 'js/[name].[chunkhash].min.js' : 'js/[name].[chunkhash].js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        path.join(__dirname, './src')
      ] 
    },
    module: {   
       rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  presets: [
                      ['es2015', {
                        // "modules": false,  //让它在编译转化es6代码时不把import export转换为cmd的module.export
                        'loose': true
                      }], 'react', 'stage-0'
                  ],
                  plugins: [
                      ["transform-class-properties"],
                      ["transform-runtime"],
                      ['import', {
                          libraryName: 'antd',
                          style: 'css'
                      }]
                  ]
                },
            },   
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?minimize'
              }),
            },        
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader?minimize', 'sass-loader?minimize']
              }),
            },           
            {
              test: /\.(svg|png|jpg|jpeg|gif)$/,
              loader: [
                'file-loader?limit=1&name=./images/[name].[ext]',
                {
                    loader: 'image-webpack-loader',
                    // query: {
                    //   progressive: true,
                    //   optimizationLevel: 7,
                    //   interlaced: false,
                    //   pngquant: {
                    //     quality: '65-90',
                    //     speed: 4
                    //   }
                    // }
                  }
              ]     
            },
        ]    
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(js|css)$/,
          threshold: 10240,
          minRatio: 0.8
      }),
      new ExtractTextPlugin({
        filename: './css/[name].[chunkhash:4].css',
        allChunks: true,
      }),
      new HtmlWebpackPlugin({
        inject: 'body',
        filename: 'index.html',
        template: './src/template/index.html'
      }),     
      // new CleanPlugin(['dist', 'build']),
      // 启动热替换
      new webpack.HotModuleReplacementPlugin(),
      new LodashModuleReplacementPlugin({
        'collections': true,
        'paths': true
      }),
      // 公共库 
      new CommonsChunkPlugin({
       name: 'vendors',
       minChunks: 2
      }),
    ]
}
// 判断开发环境还是生产环境,添加uglify等插件
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || [])
    .concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        // 最紧凑的输出
        beautify: false,
        // 删除所有的注释
        comments: false,
        compress: {
          // 在UglifyJs删除没有用到的代码时不输出警告  
          warnings: false,
          // 删除所有的 `console` 语句
          // 还可以兼容ie浏览器
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true,
        }
      })
    ])
} else {
  module.exports.devtool = 'cheap-module-eval-source-map'
  module.exports.devServer = {
    port: 4000,
    contentBase: './build',
    host: '127.0.0.1',
    hot: true,
    inline: true,
    historyApiFallback: true,
    publicPath: '',
    stats: {
      colors: true
    }
  }
}