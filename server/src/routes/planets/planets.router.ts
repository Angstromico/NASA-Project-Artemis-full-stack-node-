import { Router } from 'express'
import getAllPlanets from './planets.controller.js'

const planetsRouter = Router()

planetsRouter.get('/', (_, res) => {
  getAllPlanets(_, res)
})

export default planetsRouter
