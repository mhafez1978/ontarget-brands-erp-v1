import { config } from "dotenv"
import { defineConfig, env } from "prisma/config"

// Prisma 7 no longer auto-loads env files; Next.js keeps secrets in .env.local
config({ path: ".env.local" })
config()

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
})
