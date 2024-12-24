import { hash, compare } from 'bcrypt'
import prisma from './prisma'

export async function createUser(username: string, email: string, password: string) {
  const hashedPassword = await hash(password, 10)
  return prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  })
}

export async function validateUser(username: string, password: string) {
  const user = await prisma.user.findUnique({ where: { username } })
  if (!user) return null
  const isValid = await compare(password, user.password)
  return isValid ? user : null
}

