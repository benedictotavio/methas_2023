import { createMetha } from '../controllers/metha.controller'
import express from 'express'

const router = express.Router()

router.post('/add', createMetha)

export default router