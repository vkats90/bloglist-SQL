import type { User } from './models/users'
import type { Blog } from './models/blogs'

export type UserType = Omit<User, 'toJSON'>
export { Blog }

declare global {
  namespace Express {
    interface Request {
      user?: Omit<User, 'toJSON' | 'passwordHash'>
    }
  }
}
