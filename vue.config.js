module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080", //跨域网址
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //自动修改http header里面的host
        pathRewrite: {
          "^/api": "", //路径的替换规则
        },
      },
    },
  },
};
