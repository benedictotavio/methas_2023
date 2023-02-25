import { completeMetha, createMetha, deleteMetha, editMetha } from '../controllers/metha.controller'
import express from 'express'

const router = express.Router()

router.post('/add/:id', createMetha)
router.delete('/delete', deleteMetha)
router.put('/edit', editMetha)
router.post('/complete',completeMetha)

export default router