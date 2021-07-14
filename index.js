const buildApp = require('./src/app')
const config = require('./src/config')

const startApp = async () => {
    const appOptions = {
        logger: true
    }
    const app = buildApp(appOptions)

    try{
        app.listen(config.port, config.hostname)
        console .log(`app is listening on port ${config.port}`)
    } catch (error){
      throw error
    }
}

startApp()