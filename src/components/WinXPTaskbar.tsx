import { useState, useEffect } from 'react'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'
import { WinXPStartMenu } from './WinXPStartMenu'
import { soundManager } from '../utils/sound-manager'

export const WinXPTaskbar = () => {
  const [isStartOpen, setIsStartOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [openWindows, setOpenWindows] = useState<string[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleStartClick = () => {
    soundManager.play('click')
    setIsStartOpen(!isStartOpen)
  }

  return (
    <>
      <div 
        className="fixed bottom-0 left-0 right-0 h-12 flex items-center justify-between px-1 z-50"
        style={{ 
          background: `linear-gradient(to bottom, ${winXPColors.blue.primary}, ${winXPColors.blue.secondary})`,
          borderTop: `1px solid ${winXPColors.blue.hover}`
        }}
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

          {/* Quick Launch */}
          <div className="border-l border-blue-400 mx-2 h-8" />
          <div className="flex space-x-1">
            {['internetExplorer', 'myDocuments', 'security'].map((icon) => (
              <button 
                key={icon}
                className="p-1 rounded hover:bg-blue-400/20"
              >
                <img 
                  src={winXPAssets.icons[icon]} 
                  alt="" 
                  className="w-6 h-6"
                />
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
      />
    </>
  )
} 