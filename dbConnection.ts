import { Sequelize } from 'sequelize'
import logger from './utils/logger'
import 'dotenv/config'

const connectionString =
  process.env.NODE_ENV != 'test'
    ? (process.env.POSTGRES_URL as string)
    : (process.env.TEST_POSTGRES_URL as string)

const dialectOptions: any = {}

dialectOptions.ssl = {
  require: true,
  rejectUnauthorized: false,
}

export const sequelize = new Sequelize(connectionString, {
  dialectOptions,
  // Sequelize expects either a logging function or false
  logging: process.env.NODE_ENV !== 'test' ? console.log : false,
})

export const dbConnect = async () => {
  try {
    await sequelize.authenticate()
    logger.info('Connected to Postgres')
  } catch (error) {
    logger.error("Can't connect to Database", error)
  }
}
