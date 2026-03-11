import { type ClassValue, clsx } from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]){
  return twMerge(clsx(inputs))
}

export function formatSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return "0 B";
  
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  );
}

export const generateUUID = () => crypto.randomUUID()