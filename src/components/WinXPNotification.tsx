import { m as motion, AnimatePresence } from 'framer-motion'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'

interface WinXPNotificationProps {
  title: string
  message: string
  type?: 'info' | 'error' | 'success'
  onClose: () => void
  isVisible: boolean
}

export const WinXPNotification = ({
  title,
  message,
  type = 'info',
  onClose,
  isVisible
}: WinXPNotificationProps) => {
  const getIcon = () => {
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-16 right-4 w-80 shadow-lg rounded-lg overflow-hidden z-50"
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
            <span className="text-white text-sm font-bold">{title}</span>
            <button 
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded px-2"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-4 flex items-start space-x-3">
            <img src={getIcon()} alt="" className="w-8 h-8" />
            <p className="text-sm">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 