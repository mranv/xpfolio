import { motion, AnimatePresence } from 'framer-motion'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'
import { useResponsive } from '../hooks/useResponsive'

interface WinXPNotificationProps {
  title: string
  message: string
  type?: 'info' | 'error' | 'success'
  icon?: string
  onClose: () => void
  isVisible: boolean
}

export const WinXPNotification = ({
  title,
  message,
  type = 'info',
  icon,
  onClose,
  isVisible
}: WinXPNotificationProps) => {
  const { isMobile } = useResponsive()
  
  const getDefaultIcon = () => {
    switch (type) {
      case 'error': return winXPAssets.icons.error
      case 'success': return winXPAssets.icons.success
      default: return winXPAssets.icons.info
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className={`
            shadow-lg rounded-lg overflow-hidden
            ${isMobile ? 'w-[90vw] mx-4' : 'w-80'}
          `}
          style={{ 
            background: winXPColors.silver.light,
            border: `1px solid ${winXPColors.silver.dark}`
          }}
        >
          {/* Title Bar */}
          <div 
            className="px-4 py-2 flex items-center justify-between"
            style={{ 
              background: `linear-gradient(to right, ${winXPColors.blue.primary}, ${winXPColors.blue.secondary})`
            }}
          >
            <span className="text-white text-sm font-bold truncate">
              {title}
            </span>
            <button 
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded px-2"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-4 flex items-start space-x-3">
            <img 
              src={icon || getDefaultIcon()} 
              alt="" 
              className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" 
            />
            <p className="text-sm flex-grow">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 