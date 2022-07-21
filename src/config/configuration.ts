const configuration = () => ({
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    globalPrefix: process.env.APP_GLOBAL_PREFIX || '/api'
  }
})

// 配置的类型
type ConfigType = ReturnType<typeof configuration>

export {  
  ConfigType
}
 
export default configuration;
