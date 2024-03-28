module.exports = ({
  transpileDependencies: true,

  devServer: {
    proxy: {
        '^/api': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
            target: "http://127.0.0.1:8078", //目标地址，一般是指后台服务器地址
            changeOrigin: true, //是否跨域
            ws:true,//webSocket也会被代理
            pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
                '^/api': "" 
            }
        }
    }
}
});
