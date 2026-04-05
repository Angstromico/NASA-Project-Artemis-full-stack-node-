import type { Request, Response } from 'express'
import { launches } from '@/models/launches.model.js'
import { OK } from '@/utils/http-codes.js'

function getAllLaunches(_: Request, res: Response): void {
  const launchesArray = Array.from(launches.values())

  res.status(OK).json(launchesArray)
}

export { getAllLaunches }
