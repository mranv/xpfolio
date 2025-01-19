import { useState } from 'react'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'
import { WinXPButton } from './ui/WinXPButton'

export const WinXPTaskbar = () => {
  const [isStartOpen, setIsStartOpen] = useState(false)
  const currentTime = new Date().toLocaleTimeString()

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-12 flex items-center justify-between px-1"
      style={{ 
        background: `linear-gradient(to bottom, ${winXPColors.blue.primary}, ${winXPColors.blue.secondary})`,
        borderTop: `1px solid ${winXPColors.blue.hover}`
      }}
    >
      <div className="flex items-center">
        <WinXPButton 
          variant="start"
          icon={winXPAssets.icons.myComputer}
          onClick={() => setIsStartOpen(!isStartOpen)}
          className="h-10"
        >
          Start
        </WinXPButton>
        
        <div className="border-l border-blue-400 mx-2 h-8" />
        
        {/* Quick Launch */}
        <div className="flex space-x-1">
          <button className="p-1 rounded hover:bg-blue-400/20">
            <img src={winXPAssets.icons.internetExplorer} alt="IE" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* System Tray */}
      <div 
        className="px-2 py-1 flex items-center space-x-2"
        style={{ background: winXPColors.silver.medium }}
      >
        <span className="text-sm">{currentTime}</span>
      </div>
    </div>
  )
} 