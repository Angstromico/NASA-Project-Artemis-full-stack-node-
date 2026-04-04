import { Router } from 'express'

const planetsRouter = Router()

planetsRouter.get('/', (_, res) => {
  res.send('All planets')
})

export default planetsRouter
