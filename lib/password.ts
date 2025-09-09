import { scrypt as _scrypt, randomBytes, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'

const scrypt = promisify(_scrypt) as (password: string | Buffer, salt: string | Buffer, keylen: number) => Promise<Buffer>

// Format: algorithm:salt:hashHex
const KDF = 'scrypt'
const KEYLEN = 64

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex')
  const derivedKey = await scrypt(password, salt, KEYLEN)
  return `${KDF}:${salt}:${derivedKey.toString('hex')}`
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  try {
    const [kdf, salt, hashHex] = stored.split(':')
    if (kdf !== KDF || !salt || !hashHex) return false
    const derivedKey = await scrypt(password, salt, KEYLEN)
    const hashBuf = Buffer.from(hashHex, 'hex')
    if (hashBuf.length !== derivedKey.length) return false
    return timingSafeEqual(hashBuf, derivedKey)
  } catch {
    return false
  }
}
