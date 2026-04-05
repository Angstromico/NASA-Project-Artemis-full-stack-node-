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

const launches = new Map<number, Launch>()

const launch = {
  mission: 'Kepler exploration X',
  rocket: 'Explorer IS1',
  destination: 'Kepler-442b',
  launchDate: new Date('December 27, 2035'),
  flightNumber: 100,
  customers: ['NASA', 'ZTM'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch)

export { launches }
