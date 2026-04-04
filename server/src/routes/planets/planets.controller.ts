import type { Request, Response } from 'express'
import { OK } from '../../utils/http-codes.js'

const planets = [
  {
    name: 'Earth',
    color: 'blue',
  },
  {
    name: 'Mars',
    color: 'red',
  },
]

function getAllPlanets(_: Request, res: Response) {
  return res.status(OK).json(planets)
}

export default getAllPlanets
