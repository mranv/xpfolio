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
        className="fixed bottom-0 left-0 right-0 h-[30px] flex items-stretch z-50"
        style={{ 
          background: 'linear-gradient(to bottom, #1F48B0 0%, #2259C7 3%, #2B69DC 6%, #2E71E9 10%, #2D6FE7 12%, #2C6EE6 14%, #2B6CE4 16%, #296AE2 20%, #286AE1 23%, #2869E0 30%, #2868DE 35%, #2767DD 40%, #2666DC 44%, #2565DB 57%, #2564DA 78%, #2463D9 91%, #2462D8 95%, #2461D7 100%)',
          borderTop: '1px solid #0831D9'
        }}
      >
        {/* Start Button */}
        <button
          onClick={handleStartClick}
          className={`
            px-2 flex items-center space-x-1 h-full
            ${isStartOpen ? 'bg-[#1E47AA] shadow-inner' : 'hover:brightness-110'}
          `}
          style={{ 
            background: isStartOpen ? undefined : 'linear-gradient(to bottom, #3C9E46 0%, #328E3B 14%, #2A833B 22%, #297B34 33%, #1E6427 86%, #145C1D 100%)',
            borderRadius: '0 8px 8px 0'
          }}
        >
          <img 
            src={winXPAssets.icons.start}
            alt="Start" 
            className="w-5 h-5"
          />
          <span className="font-bold text-white text-sm pr-1">Start</span>
        </button>

        {/* Quick Launch */}
        <div className="border-l border-[#0831D9] mx-2 opacity-50" />
        
        {/* Window Buttons */}
        <div className="flex-1 flex items-center space-x-1 px-1">
          {windows.map(window => (
            <button
              key={window.id}
              onClick={() => activateWindow(window.id)}
              className={`
                h-[22px] px-2 flex items-center space-x-2 rounded
                ${window.isActive ? 'bg-[#3C81F3]' : 'bg-[#2B68DC] hover:bg-[#3978E6]'}
              `}
              style={{
                boxShadow: window.isActive ? 'inset 0 0 1px 1px rgba(0,0,0,0.2)' : undefined
              }}
            >
              <img src={window.icon} alt="" className="w-4 h-4" />
              <span className="text-white text-xs truncate max-w-[120px]">
                {window.title}
              </span>
            </button>
          ))}
        </div>

        {/* System Tray */}
        <div className="h-full flex items-center px-2 bg-[#0F3FD0] space-x-2">
          <img src={winXPAssets.icons.shield} alt="" className="w-4 h-4" />
          <img src={winXPAssets.icons.network} alt="" className="w-4 h-4" />
          <span className="text-white text-xs border-l border-[#2462D8] pl-2">
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