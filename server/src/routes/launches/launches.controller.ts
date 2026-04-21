import type { Request, Response } from 'express'
import { launches, type Launch } from '@/models/launches.model.js'
import { OK } from '@/utils/http-codes.js'

function getAllLaunches(_: Request, res: Response): void {
  const launchesArray = Array.from(launches.values())

  res.status(OK).json(launchesArray)
}

function addNewLaunch(req: Request, res: Response): void {
  const launch: Launch = req.body

  launches.set(launch.flightNumber, launch)

  res.status(OK).json(launch)
}

export { getAllLaunches, addNewLaunch }
