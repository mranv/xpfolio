import { createContext, useContext, ReactNode } from 'react'
import { useWindowManager } from '../hooks/useWindowManager'

const WindowContext = createContext<ReturnType<typeof useWindowManager> | undefined>(undefined)

export const WindowProvider = ({ children }: { children: ReactNode }) => {
  const windowManager = useWindowManager()

  return (
    <WindowContext.Provider value={windowManager}>
      {children}
    </WindowContext.Provider>
  )
}

export const useWindows = () => {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('useWindows must be used within a WindowProvider')
  }
  return context
} 