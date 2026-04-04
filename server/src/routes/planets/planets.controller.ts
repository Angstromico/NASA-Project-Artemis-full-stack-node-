import type { Request, Response } from 'express'

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
  res.status(200).json(planets)
}

export default getAllPlanets
