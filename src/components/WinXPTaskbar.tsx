import { useState, useEffect } from 'react'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'
import { WinXPStartMenu } from './WinXPStartMenu'
import { soundManager } from '../utils/sound-manager'
import { useWindowManager } from '../hooks/useWindowManager'

export const WinXPTaskbar = () => {
  const [isStartOpen, setIsStartOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const { windows, openWindow, activateWindow } = useWindowManager()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleStartClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    soundManager.play('click')
    setIsStartOpen(!isStartOpen)
  }

  useEffect(() => {
    const handleClickOutside = () => {
      if (isStartOpen) {
        setIsStartOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isStartOpen])

  const handleOpenWindow = (id: string, title: string) => {
    openWindow(id, title)
  }

  return (
    <>
      <div 
        className="fixed bottom-0 left-0 right-0 h-12 flex items-center justify-between px-1 z-50"
        style={{ 
          background: `linear-gradient(to bottom, ${winXPColors.blue.primary}, ${winXPColors.blue.secondary})`,
          borderTop: `1px solid ${winXPColors.blue.hover}`
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Start Button */}
        <div className="flex items-center">
          <button
            onClick={handleStartClick}
            className={`
              h-11 px-4 flex items-center space-x-2 rounded
              hover:brightness-110 transition-all
              ${isStartOpen ? 'bg-blue-700' : ''}
            `}
            style={{ 
              background: isStartOpen ? winXPColors.blue.hover : winXPColors.green.start
            }}
          >
            <img 
              src={winXPAssets.icons.myComputer} 
              alt="Start" 
              className="w-6 h-6"
            />
            <span className="font-bold text-white">Start</span>
          </button>

          {/* Window Buttons */}
          <div className="flex-1 flex items-center ml-4 space-x-1">
            {windows.map(window => (
              <button
                key={window.id}
                onClick={() => activateWindow(window.id)}
                className={`
                  h-8 px-3 flex items-center space-x-2 rounded
                  hover:brightness-110 transition-all
                  ${window.isActive ? 'bg-blue-600' : 'bg-blue-500/50'}
                `}
              >
                <img 
                  src={winXPAssets.icons.folder} 
                  alt="" 
                  className="w-4 h-4"
                />
                <span className="text-white text-sm truncate max-w-[120px]">
                  {window.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* System Tray */}
        <div 
          className="px-3 py-1 flex items-center space-x-3 h-full"
          style={{ background: winXPColors.silver.medium }}
        >
          <img src={winXPAssets.icons.shield} alt="" className="w-4 h-4" />
          <img src={winXPAssets.icons.network} alt="" className="w-4 h-4" />
          <span className="text-sm border-l border-gray-400 pl-3">
            {currentTime.toLocaleTimeString()}
          </span>
        </div>
      </div>

      <WinXPStartMenu 
        isOpen={isStartOpen} 
        onClose={() => setIsStartOpen(false)}
        onOpenWindow={handleOpenWindow}
      />
    </>
  )
} 