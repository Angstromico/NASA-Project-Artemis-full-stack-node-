import express from 'express'
import cors from 'cors'

const whitelist = [process.env.CORS_ORIGIN || 'http://localhost:5173']

const app = express()
app.use(
  cors({
    origin: whitelist,
  })
)
app.use(express.json())

export default app
