import { Router } from 'express'
import planetsRouter from './planets/planets.router.js'

const router = Router()

router.use('/planets', planetsRouter)

export default router
