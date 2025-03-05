import {arrayBufferToBase64} from "@hydrophobefireman/j-utils";

import {generateKey} from "./util";

export async function encrypt(file: ArrayBuffer, password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(100));
  const {key, ITER_COUNT} = await generateKey(password, salt.buffer);
  const iv = crypto.getRandomValues(new Uint8Array(1000));
  const encryptedBuf = await crypto.subtle.encrypt(
    {name: "AES-GCM", iv},
    key,
    file,
  );
  return {
    encryptedBuf,
    meta: JSON.stringify({
      salt: await arrayBufferToBase64(salt.buffer),
      ITER_COUNT,
      iv: await arrayBufferToBase64(iv.buffer),
    }),
  };
}
