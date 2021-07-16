const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    hostname: process.env.HOSTNAME || 'localhost',
    mongodb: {
        uri: process.env.MONGO_URI || 'mongodb://localhost/basic101'
    },
    secretKey: process.env.SECRET_KEY || '123456'
}

module.exports = config