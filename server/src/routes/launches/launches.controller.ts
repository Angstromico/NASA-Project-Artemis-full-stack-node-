import type { Request, Response } from 'express'
import { launches, type Launch, getNextFlightNumber } from '@/models/launches.model.js'
import { OK } from '@/utils/http-codes.js'

function getAllLaunches(_: Request, res: Response): void {
  const launchesArray = Array.from(launches.values())

  res.status(OK).json(launchesArray)
}

function addNewLaunch(req: Request, res: Response): void {
  const launch: Omit<Launch, 'flightNumber'> = req.body
  const flightNumber = getNextFlightNumber()

  launches.set(flightNumber, { ...launch, flightNumber })

  res.status(OK).json({ ...launch, flightNumber, upcoming: true })
}

export { getAllLaunches, addNewLaunch }
