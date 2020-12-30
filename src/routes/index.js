import { Router } from "express"
import ServibilidadeController from '../controllers/servibilidade'

const router = new Router()

router.get('/', (req, res) => {
    return res.status(200).json({ message: 'SBP-API' })
})


// servibilidade
router.post('/api/servibilidades', ServibilidadeController.save)

export default router