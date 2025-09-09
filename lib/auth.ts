import { SignJWT, jwtVerify } from 'jose'

const encoder = new TextEncoder()

const JWT_SECRET = process.env.JWT_SECRET || 'dev-insecure-secret'
const secretKey = encoder.encode(JWT_SECRET)
export const ADMIN_TOKEN_COOKIE = 'admin_token'

export type AdminJWTPayload = {
  sub: string
  email: string
  role: 'admin'
}

export async function createAdminJWT(payload: AdminJWTPayload, expiresIn = '7d') {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secretKey)
}

export async function verifyAdminJWT(token: string) {
  const { payload } = await jwtVerify(token, secretKey)
  return payload as AdminJWTPayload
}
