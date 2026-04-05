import { Router } from 'express'
import { getAllLaunches } from './launches.controller.js'

const launchesRouter = Router()

launchesRouter.get('/', getAllLaunches)

export default launchesRouter
