import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const launchesFilePath = path.join(__dirname, 'launches-data.json')

export interface Launch {
  mission: string
  rocket: string
  destination: string
  launchDate: Date
  flightNumber: number
  customers: string[]
  upcoming: boolean
  success: boolean
}

// Load launches from file or initialize with default
let launches: Map<number, Launch>
let latestFlightNumber = 100

function loadLaunches(): void {
  try {
    if (fs.existsSync(launchesFilePath)) {
      const data = fs.readFileSync(launchesFilePath, 'utf-8')
      const launchesArray = JSON.parse(data) as Launch[]
      launches = new Map(
        Array.isArray(launchesArray) ? launchesArray.map((l: Launch) => [l.flightNumber, l]) : []
      )
      // Find the highest flight number
      const maxFlightNumber = Math.max(...launchesArray.map((l: Launch) => l.flightNumber))
      latestFlightNumber = maxFlightNumber + 1
    } else {
      launches = new Map()
      // Add initial launch
      const initialLaunch = {
        mission: 'Kepler exploration X',
        rocket: 'Explorer IS1',
        destination: 'Kepler-442b',
        launchDate: new Date('December 27, 2035'),
        flightNumber: getNextFlightNumber(),
        customers: ['NASA', 'ZTM'],
        upcoming: true,
        success: true,
      }
      launches.set(initialLaunch.flightNumber, initialLaunch)
      saveLaunches()
    }
  } catch (error) {
    console.error('Error loading launches:', error)
    launches = new Map()
  }
}

function saveLaunches(): void {
  try {
    const launchesArray = Array.from(launches.values())
    fs.writeFileSync(launchesFilePath, JSON.stringify(launchesArray, null, 2))
  } catch (error) {
    console.error('Error saving launches:', error)
  }
}

loadLaunches()

export function getNextFlightNumber(): number {
  return latestFlightNumber++
}

export function addLaunch(launch: Launch): void {
  launches.set(launch.flightNumber, launch)
  saveLaunches()
}

export function abortLaunch(flightNumber: number): boolean {
  const launch = launches.get(flightNumber)
  if (launch) {
    launch.upcoming = false
    launch.success = false
    saveLaunches()
    return true
  }
  return false
}

export { launches }
