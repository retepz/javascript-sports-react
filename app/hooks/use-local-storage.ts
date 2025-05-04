import { useCallback } from 'react'

export function useLocalStorage() {
  const getLocalStorage = useCallback((key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }
    return null
  }, [])

  const setLocalStorage = useCallback((key: string, newValue: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, newValue)
    }
  }, [])

  return { getLocalStorage, setLocalStorage }
}
