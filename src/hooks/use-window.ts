import { useEffect, useState } from "react"

// Access the window object client-side without hydration errors or "undefined" errors.
export const useWindow = () => {
  const [win, setWin] = useState<Window>()

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setWin(window), [])

  return win
}
