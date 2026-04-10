import express from 'express'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import morgan from 'morgan'

import router from './routes/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const whitelist = [process.env.CORS_ORIGIN || 'http://localhost:5173']

const app = express()
app.use(
  cors({
    origin: whitelist,
  })
)
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json())

app.use(router)

app.get(/.*/, (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

export default app
