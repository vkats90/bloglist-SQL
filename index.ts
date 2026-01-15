import app from './app'
import logger from './utils/logger'
import { dbConnect } from './dbConnection'
import { initDB } from './initDB'

const PORT = parseInt(process.env.PORT || '3001', 10)

;(async () => {
  await dbConnect()
  if (process.env.NODE_ENV == 'development') await initDB()
  app.listen(PORT, '0.0.0.0', () => {
    logger.info(`Server running on port ${PORT}`)
  })
})()
