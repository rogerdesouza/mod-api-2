import routes from './routes'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import morgan from 'morgan'
import env from 'dotenv'
import './models'

export class App {

    constructor() {
        env.config()
        this.nodeEnv = process.env.NODE_ENV || 'development'
        this.url = process.env.URL || '0.0.0.0'
        this.port = process.env.PORT || '3036'
        this.server = express()
        this.middleware()
        this.routes()
        this.listen()
    }

    getServer() {
        return this.server
    }

    middleware() {
        this.server.use(express.json())
        this.server.use(cors())
        this.server.use(compression())
        this.server.use(helmet())
        this.server.use(morgan('dev'))
    }

    routes() {
        this.server.use(routes)
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server running in ${this.nodeEnv} mode on http://${this.url}:${this.port}`)
        })
    }
}