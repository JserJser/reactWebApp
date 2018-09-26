export default {
    plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用
    }],
  ],
    routes:[{
        path:'/',
        component:'./HelloWorld',
        component:'./Content'
    }]
};