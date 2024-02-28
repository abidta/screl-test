import express from 'express'
import { getAllData, userControllers } from '../controllers/userControllers.js'

const router = express.Router()
router.route('/').get(userControllers)
router.route('/get-all').get(getAllData)
export default router