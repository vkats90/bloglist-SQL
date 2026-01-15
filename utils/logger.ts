const info = (...params: any) => {
  const timestamp = new Date().toISOString()
  console.log(`${timestamp} [INFO]:`, ...params)
}

const error = (...params: any) => {
  const timestamp = new Date().toISOString()
  console.error(`${timestamp} [ERROR]:`, ...params)
}

export default { info, error }
