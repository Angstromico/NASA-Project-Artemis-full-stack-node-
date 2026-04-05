import express from 'express'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

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
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json())

export default app
