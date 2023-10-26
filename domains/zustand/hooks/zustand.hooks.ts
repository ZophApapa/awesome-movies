import { useEffect, useState } from 'react'

// hook to wait for Reat hydrate process to end
// (prevent Zustand slice hydrate from persisted datas to conflict with it)
export const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState<boolean>(false)

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  return hasHydrated
}
