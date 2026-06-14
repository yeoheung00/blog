// src/lib/db.ts
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

// 명시적인 config 임포트를 제거하여 번들러의 의존성 트리를 단순화합니다.
export const db = globalForPrisma.prisma || new PrismaClient({ adapter });
