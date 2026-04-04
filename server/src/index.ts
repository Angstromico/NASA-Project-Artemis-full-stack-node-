import http, { type RequestListener } from 'http'
import dotenv from 'dotenv'
import app from './app.js'
import router from './routes/index.js'

dotenv.config()

const PORT = process.env.PORT || 5080

app.use(router)

const server = http.createServer(app as unknown as RequestListener)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
