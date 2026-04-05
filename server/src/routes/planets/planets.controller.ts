import type { Request, Response } from 'express'
import { OK } from '../../utils/http-codes.js'
import planets from '../../models/planets.model.js'

async function getAllPlanets(_: Request, res: Response): Promise<Response> {
  const planetData = await planets()

  return res.status(OK).json(planetData)
}

export { getAllPlanets }
