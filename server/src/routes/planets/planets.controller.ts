import type { Request, Response } from 'express'

function getAllPlanets(_: Request, res: Response) {
  res.send('All planets')
}

export default getAllPlanets
