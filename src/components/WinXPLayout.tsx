import { ReactNode } from 'react'
import { WinXPTaskbar } from './WinXPTaskbar'
import { winXPAssets } from '../assets/winxp'
import { winXPColors } from '../utils/winxp-theme'
import { useResponsive } from '../hooks/useResponsive'

interface WinXPLayoutProps {
  children: ReactNode
}

export const WinXPLayout = ({ children }: WinXPLayoutProps) => {
  const { isMobile } = useResponsive()

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${winXPAssets.wallpapers.bliss})`,
        backgroundColor: winXPColors.blue.primary
      }}
    >
      {/* Desktop Icons */}
      <div className={`fixed top-4 ${isMobile ? 'right-4' : 'left-4'} space-y-4 md:space-y-6`}>
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
      <div className="min-h-screen pb-12 px-4 md:px-8 lg:px-12">
        {children}
      </div>

      {/* Taskbar */}
      <WinXPTaskbar />
    </div>
  )
}

const DesktopIcon = ({ icon, label }: { icon: string; label: string }) => {
  const { isMobile } = useResponsive()

  return (
    <button className={`
      w-16 md:w-20 flex flex-col items-center group
      transition-transform duration-200 ease-in-out
      ${isMobile ? 'hover:scale-110' : 'hover:scale-105'}
    `}>
      <img 
        src={icon} 
        alt={label} 
        className="w-8 h-8 md:w-10 md:h-10 mb-1" 
      />
      <span className={`
        text-white text-xs md:text-sm text-center px-1 rounded
        group-hover:bg-blue-500/30 break-words max-w-full
        ${isMobile ? 'line-clamp-1' : 'line-clamp-2'}
      `}>
        {label}
      </span>
    </button>
  )
} 