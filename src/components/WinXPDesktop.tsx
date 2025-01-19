import { useState } from 'react'
import { winXPAssets } from '../assets/winxp'
import { WinXPWindow } from './ui/WinXPWindow'
import { m as motion } from 'framer-motion'

interface DesktopIconProps {
  icon: string
  label: string
  onClick?: () => void
  position?: { x: number; y: number }
}

export const WinXPDesktop = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null)
  const [openWindows, setOpenWindows] = useState<string[]>([])

  const handleIconClick = (label: string) => {
    setSelectedIcon(label)
    if (!openWindows.includes(label)) {
      setOpenWindows([...openWindows, label])
    }
  }

  const handleWindowClose = (label: string) => {
    setOpenWindows(openWindows.filter(w => w !== label))
  }

  return (
    <div className="min-h-screen">
      {/* Desktop Icons */}
      <div className="fixed top-4 left-4 space-y-6">
        {desktopIcons.map((icon, index) => (
          <DesktopIcon
            key={icon.label}
            {...icon}
            onClick={() => handleIconClick(icon.label)}
            position={{ x: 0, y: index * 100 }}
          />
        ))}
      </div>

      {/* Windows */}
      {openWindows.map((window, index) => {
        const icon = desktopIcons.find(i => i.label === window)
        if (!icon) return null

        return (
          <WinXPWindow
            key={window}
            title={window}
            icon={icon.icon}
            onClose={() => handleWindowClose(window)}
            defaultPosition={{ x: 200 + index * 30, y: 100 + index * 30 }}
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">{window}</h2>
              <p>Content for {window}</p>
            </div>
          </WinXPWindow>
        )
      })}
    </div>
  )
}

const DesktopIcon = ({ icon, label, onClick, position }: DesktopIconProps) => {
  return (
    <motion.button
      className="w-20 flex flex-col items-center group"
      onClick={onClick}
      initial={position}
      whileHover={{ scale: 1.05 }}
    >
      <img src={icon} alt={label} className="w-10 h-10 mb-1" />
      <span className="text-white text-sm text-center px-1 rounded group-hover:bg-blue-500/30">
        {label}
      </span>
    </motion.button>
  )
}

const desktopIcons = [
  {
    icon: winXPAssets.icons.myComputer,
    label: 'My Computer'
  },
  {
    icon: winXPAssets.icons.myDocuments,
    label: 'My Documents'
  },
  {
    icon: winXPAssets.icons.recycleBin,
    label: 'Recycle Bin'
  },
  {
    icon: winXPAssets.icons.internetExplorer,
    label: 'Internet Explorer'
  }
] 