require('dotenv').config()

const config = {
    api: {
        port: process.env.PORT,
        host: process.env.HOST,
        nodeEnv: process.env.NODE_ENV,
        secretOrKey: process.env.JWT_SECRET
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            port: 7000,
            username: 'postgres',
            password: 'PacoRo0t',
            database: 'example',
            define: {
                timestamps: true,
                underscoredAll: true
            }
        },
        production: {
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            define: {
                timestamps: true,
                underscoredAll: true
            }
        }
    }    
}

module.exports = config