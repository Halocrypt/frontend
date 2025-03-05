import {useAuthState} from "@/bridge";
import {IUser} from "@/interfaces";
import {decrypt} from "@/packages/crypto/decrypt";
import {userDetails} from "@/packages/halo-api/user";
import {useEffect, useState} from "@hydrophobefireman/ui-lib";

function getProxyURL(file: string) {
  return `https://certs.halocrypt.com/${file}`;
}
export function useCertiProxy(impersonate?: string) {
  const error = null;
  const imageURL = getProxyURL(impersonate);
  return {imageURL, error};
}

function generateBlob(what: ArrayBuffer) {
  const blob = new Blob([what], {type: "application/octet-stream"});
  const url = URL.createObjectURL(blob);
  return url;
}
