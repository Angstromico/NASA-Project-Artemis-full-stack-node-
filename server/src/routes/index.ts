import { Router } from 'express'
import launchesRouter from './launches/launches.router.js'
import planetsRouter from './planets/planets.router.js'

const router = Router()

router.use('/planets', planetsRouter)
router.use('/launches', launchesRouter)

export default router
