import app from './app'
import logger from './utils/logger'
import { dbConnect } from './dbConnection'
import { initDB } from './initDB'

const PORT = process.env.PORT || 3001

;(async () => {
  await dbConnect()
  if (process.env.NODE_ENV == 'development') await initDB()
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
  })
})()
