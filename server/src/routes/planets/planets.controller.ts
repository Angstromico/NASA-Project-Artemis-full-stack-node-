import type { Request, Response } from 'express'
import { OK } from '../../utils/http-codes.js'
import planets from '../../models/planets.model.js'

function getAllPlanets(_: Request, res: Response): Response {
  return res.status(OK).json(planets)
}

export { getAllPlanets }
