import app from './app'
import logger from './utils/logger'
import { dbConnect } from './dbConnection'
import { initDB } from './initDB'

const PORT = process.env.PORT || 3001

;(async () => {
  try {
    await dbConnect()
  } catch (error) {
    logger.error('Database connection failed:', error)
    process.exit(1)
  }

  if (process.env.NODE_ENV == 'development') {
    try {
      await initDB()
    } catch (error) {
      logger.error('Database initialization failed:', error)
    }
  }

  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
  })
})()

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error)
  process.exit(1)
})
