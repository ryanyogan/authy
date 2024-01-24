import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";

export async function generateVerificationToken(email: string) {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // Expire in hour

  try {
    const existingToken = await getVerificationTokenByEmail(email);
    if (existingToken) {
      await db.verificationToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }

    const verificationToken = await db.verificationToken.create({
      data: {
        email,
        token,
        expires,
      },
    });

    return verificationToken;
  } catch (error) {
    throw new Error("Failed to create verification token! " + error);
  }
}

export async function generatePasswordResetToken(email: string) {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // Expire in hour

  try {
    const existingToken = await getPasswordResetTokenByEmail(email);

    if (existingToken) {
      await db.passwordResetToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }

    const passwordResetToken = await db.passwordResetToken.create({
      data: {
        email,
        token,
        expires,
      },
    });

    return passwordResetToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
