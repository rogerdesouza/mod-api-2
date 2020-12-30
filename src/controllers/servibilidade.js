import * as Yup from 'yup'
import Servibilidade from '../models/servibilidade'

class ServibilidadeController {

    // Cria um único registro
    async save(req, res) {
        try {
            const schema = Yup.object().shape(
                {
                    descricao: Yup.string().required().max(50)
                }
            )
            if (!(await schema.isValid(req.body))) {
                return res.status(400).send({
                    error: 'A validação falhou, verifique o preenchimento dos campos.'
                })
            }
            const result = await Servibilidade.create(req.body)
            return res.status(201).send(result)
        } catch (error) {
            return res.status(400).send({ error: 'Registro não criado!' })
        }
    }

    // Lista todos os registros
    async list() { }

    // Exibe um único registro
    async get() { }

    // Altera um único registro
    update(req, res) { return res.json({ message: 'Método Update' }) }

    // Remove um único registro
    async delete() { }

}

export default new ServibilidadeController()