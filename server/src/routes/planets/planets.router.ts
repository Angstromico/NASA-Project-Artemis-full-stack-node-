import { Router } from 'express'
import { getAllPlanets } from './planets.controller.js'

const planetsRouter = Router()

planetsRouter.get('/', async (_, res) => {
  await getAllPlanets(_, res)
})

export default planetsRouter
