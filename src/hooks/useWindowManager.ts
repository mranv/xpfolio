import { useState } from 'react'
import { soundManager } from '../utils/sound-manager'

interface Window {
  id: string
  title: string
  isActive: boolean
  isMinimized: boolean
  zIndex: number
}

export const useWindowManager = () => {
  const [windows, setWindows] = useState<Window[]>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [maxZIndex, setMaxZIndex] = useState(1000)

  const openWindow = (id: string, title: string) => {
    soundManager.play('click')
    setWindows(prev => [
      ...prev,
      { 
        id, 
        title, 
        isActive: true, 
        isMinimized: false,
        zIndex: maxZIndex + 1 
      }
    ])
    setMaxZIndex(prev => prev + 1)
    setActiveWindow(id)
  }

  const closeWindow = (id: string) => {
    soundManager.play('click')
    setWindows(prev => prev.filter(w => w.id !== id))
    if (activeWindow === id) {
      const nextWindow = windows.find(w => w.id !== id && !w.isMinimized)
      setActiveWindow(nextWindow?.id || null)
    }
  }

  const minimizeWindow = (id: string) => {
    soundManager.play('click')
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMinimized: true, isActive: false } : w
    ))
    const nextWindow = windows.find(w => w.id !== id && !w.isMinimized)
    setActiveWindow(nextWindow?.id || null)
  }

  const activateWindow = (id: string) => {
    soundManager.play('click')
    setWindows(prev => prev.map(w => ({
      ...w,
      isActive: w.id === id,
      zIndex: w.id === id ? maxZIndex + 1 : w.zIndex
    })))
    setMaxZIndex(prev => prev + 1)
    setActiveWindow(id)
  }

  return {
    windows,
    activeWindow,
    openWindow,
    closeWindow,
    minimizeWindow,
    activateWindow
  }
} 