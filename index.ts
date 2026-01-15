import app from './app'
import logger from './utils/logger'
import { dbConnect } from './dbConnection'
import { initDB } from './initDB'

const PORT = parseInt(process.env.PORT || '3001', 10)

;(async () => {
  try {
    await dbConnect()
  } catch (error) {
    logger.error('Database connection failed, but starting server anyway:', error)
  }

  if (process.env.NODE_ENV == 'development') {
    try {
      await initDB()
    } catch (error) {
      logger.error('Database initialization failed:', error)
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    logger.info(`Server running on port ${PORT}`)
  })
})()
