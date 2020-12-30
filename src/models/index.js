import Sequelize from 'sequelize'
import config from '../config/database/config'
import env from 'dotenv'
import fs from 'fs'

class DataBase {

    constructor() {
        this.init()
    }

    init() {
        env.config()
        this.nodeEnv = process.env.NODE_ENV || 'development'
        this.configuration = config[this.nodeEnv]

        // Inicializa conexao
        this.connection = new Sequelize(this.configuration)

        // Percorre o vetor e acessa o método inicializador
        fs.readdirSync(__dirname)
            .map(fileName => {
                if (fileName !== 'index.js') {
                    let { default: model } = require(`./${fileName.slice(0, -3)}`)
                    model.init(this.connection)
                }
            })
    }

}

export default new DataBase()