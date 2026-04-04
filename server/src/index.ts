import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (_, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 5080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
