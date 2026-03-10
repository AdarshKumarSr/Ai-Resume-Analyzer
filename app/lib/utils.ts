/**
 * Converts bytes to a human-readable file size string
 * @param bytes - The size in bytes
 * @param decimals - Number of decimal places (default: 2)
 * @returns A formatted string (e.g., "1.5 MB", "256 KB")
 */
export function formatSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return "0 B";
  
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  );
}

export const generateUUID = () => crypto.randomUUID