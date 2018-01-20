const htmlWebpackPlugin=require("html-webpack-plugin");
const cleanWebpackPlugin=require("clean-webpack-plugin");
const webpack=require("webpack");
const path=require("path");

module.exports={
    entry:`${__dirname}/src/index.js`,                                                                  
    output:{
        path:`${__dirname}/dist`,
        filename:'js/[name]-[chunkhash:5].js',
        publicPath:'' //打包上线地址
    },
    module:{
        rules:[
            {
                test:/\.js|\.jsx$/,
                use:['babel'],
                exclude: /node_modules/
            },
            {
                test:/\.scss|\.css$/,
                loaders:['style','css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]','sass','postcss']
            }
        ]
    },
    devtool:'eval-source-map',
    resolveLoader: {
        moduleExtensions: [ '-loader' ]        
    },
    resolve:{
        extensions:['.js','.jsx','.css','.sass','.scss']
    },
    devServer:{
        historyApiFallback: true,
        inline: true,
        contentBase:'./dist/',
        port:9898,
        setup(app){
            app.get("/api/list",(req,res)=>{
                res.json([1,2,3,"李靖"])
            })
        }
    },
    plugins:[
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title:'章鱼精选',
            template:'index.html',
            favicon:"favicon.ico"
        })
    ]
}