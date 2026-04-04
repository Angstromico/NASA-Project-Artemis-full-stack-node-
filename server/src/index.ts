import http, { type RequestListener } from 'http'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (_, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 5080

const server = http.createServer(app as unknown as RequestListener)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
