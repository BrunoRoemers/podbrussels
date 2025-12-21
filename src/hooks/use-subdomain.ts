import { useWindow } from "./use-window"

export const useSubdomain = (): string | undefined => {
  const window = useWindow()

  const hostname = window?.location.hostname
  if (!hostname) return undefined

  const parts = hostname.split(".")
  if (parts.length != 3) return undefined

  return parts[0]
}
