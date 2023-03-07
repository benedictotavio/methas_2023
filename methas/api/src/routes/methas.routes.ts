import { comebackMetha, completeMetha, createMetha, deleteMetha, editMetha, getAllMetha } from '../controllers/metha.controller'
import express from 'express'

const router = express.Router()

router.get('/:id', getAllMetha)
router.post('/add/:id', createMetha)
router.post('/delete', deleteMetha)
router.post('/edit', editMetha)
router.post('/complete', completeMetha)
router.post('/uncomplete', comebackMetha)

export default router