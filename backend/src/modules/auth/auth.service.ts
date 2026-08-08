import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../config/database";
import { logger } from "../../utils/logger";

export async function registerUser(email: string, password: string, name?: string) {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("User with this email already exists.");
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
    },
    select: {
      id: true,
      email: true,
      name: true,
      plan: true,
      createdAt: true,
    },
  });

  const secret = process.env.JWT_SECRET || "fallback_jwt_secret_key_change_in_prod";
  const token = jwt.sign({ userId: user.id, email: user.email }, secret, { expiresIn: "7d" });

  logger.info(`New user registered: ${user.email}`);

  return { user, token };
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }

  const secret = process.env.JWT_SECRET || "fallback_jwt_secret_key_change_in_prod";
  const token = jwt.sign({ userId: user.id, email: user.email }, secret, { expiresIn: "7d" });

  logger.info(`User logged in: ${user.email}`);

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      plan: user.plan,
    },
    token,
  };
}
