// @ts-ignore
import { PrismaClient } from '.prisma/client/index.js'

const prismaClientSingleton = () => {
  return new PrismaClient({ log: ['query'] })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
