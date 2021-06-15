import { base64ToArrayBuffer } from "@hydrophobefireman/j-utils";
import { generateKey } from "./util";

export async function decrypt(
  encryptedBuf: ArrayBuffer,
  meta: any,
  password: string
) {
  const { ITER_COUNT, iv: ivb64, salt: saltb64 } = meta;
  const iv = await base64ToArrayBuffer(ivb64);
  const salt = await base64ToArrayBuffer(saltb64);
  const { key } = await generateKey(password, salt, ITER_COUNT);
  return await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    encryptedBuf
  );
}
