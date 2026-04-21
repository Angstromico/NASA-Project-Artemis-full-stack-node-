import { Router } from 'express'
import { getAllLaunches, addNewLaunch } from './launches.controller.js'

const launchesRouter = Router()

launchesRouter.get('/', getAllLaunches)
launchesRouter.post('/', addNewLaunch)

export default launchesRouter
