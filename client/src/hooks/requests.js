const API_URL = process.env.REACT_APP_API_URL

async function httpGetPlanets() {
  const response = await fetch(
    `${API_URL}${process.env.REACT_APP_PLANETS_ENDPOINT}`,
  )
  const planets = await response.json()
  return planets
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  const launches = await response.json()
  return launches.sort((a, b) => a.flightNumber - b.flightNumber)
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch }
