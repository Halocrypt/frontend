const textEncoder = new TextEncoder();

const ITER_COUNT = 200000;

function getRawKey(password: string): Promise<CryptoKey> {
  const encPassword = textEncoder.encode(password);
  return crypto.subtle.importKey(
    "raw",
    encPassword,
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"]
  );
}

export async function generateKey(
  password: string,
  salt: ArrayBuffer,
  iterCount: number = ITER_COUNT
) {
  const key = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: iterCount,
      hash: "SHA-512",
    },
    await getRawKey(password),
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
  return { key, ITER_COUNT: iterCount };
}

export interface EncData {
  encryptedBuf: ArrayBuffer;
  meta: string;
}
