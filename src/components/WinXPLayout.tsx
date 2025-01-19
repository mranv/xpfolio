import { ReactNode } from 'react'
import { WinXPTaskbar } from './WinXPTaskbar'
import { winXPAssets } from '../assets/winxp'
import { winXPColors } from '../utils/winxp-theme'

interface WinXPLayoutProps {
  children: ReactNode
}

export const WinXPLayout = ({ children }: WinXPLayoutProps) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${winXPAssets.wallpapers.bliss})`,
        backgroundColor: winXPColors.blue.primary // Fallback
      }}
    >
      {/* Desktop Icons */}
      <div className="fixed top-4 left-4 space-y-6">
        <DesktopIcon 
          icon={winXPAssets.icons.myComputer}
          label="My Computer"
        />
        <DesktopIcon 
          icon={winXPAssets.icons.myDocuments}
          label="My Documents"
        />
        <DesktopIcon 
          icon={winXPAssets.icons.recycleBin}
          label="Recycle Bin"
        />
      </div>

      {/* Main Content Area */}
      <div className="min-h-screen pb-12">
        {children}
      </div>

      {/* Taskbar */}
      <WinXPTaskbar />
    </div>
  )
}

const DesktopIcon = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <button className="w-20 flex flex-col items-center group">
      <img src={icon} alt={label} className="w-10 h-10 mb-1" />
      <span className="text-white text-sm text-center px-1 rounded group-hover:bg-blue-500/30">
        {label}
      </span>
    </button>
  )
} 