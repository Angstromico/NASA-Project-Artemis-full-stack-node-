import { parse } from 'csv-parse'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface KeplerPlanet {
  koi_disposition: string
  koi_insol: string
  koi_prad: string
  kepler_name?: string
}

export interface HabitablePlanet {
  name: string
  color: string
}

function isHabitablePlanet(planet: KeplerPlanet): boolean {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    Number(planet['koi_insol']) > 0.36 &&
    Number(planet['koi_insol']) < 1.11 &&
    Number(planet['koi_prad']) < 1.6
  )
}

const loadPlanetsData = (): Promise<KeplerPlanet[]> => {
  return new Promise((resolve, reject) => {
    const results: KeplerPlanet[] = []

    fs.createReadStream(path.join(__dirname, '../data/kepler_data.csv'))
      .pipe(
        parse({
          comment: '#',
          columns: true,
        })
      )
      .on('data', (data: KeplerPlanet) => {
        if (isHabitablePlanet(data)) {
          results.push(data)
        }
      })
      .on('error', (err) => {
        console.error(err)
        reject(err)
      })
      .on('end', () => {
        console.log(`${results.length} habitable planets found!`)
        resolve(results)
      })
  })
}

export default loadPlanetsData
