import { motion, AnimatePresence } from 'framer-motion'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'

interface ContextMenuItem {
  icon?: string
  label: string
  onClick?: () => void
  divider?: boolean
}

interface WinXPContextMenuProps {
  x: number
  y: number
  items: ContextMenuItem[]
  onClose: () => void
}

export const WinXPContextMenu = ({ x, y, items, onClose }: WinXPContextMenuProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed z-50 w-48 bg-white shadow-lg rounded overflow-hidden"
        style={{ 
          top: y, 
          left: x,
          border: `1px solid ${winXPColors.silver.dark}`
        }}
      >
        {items.map((item, index) => (
          <div key={index}>
            {item.divider ? (
              <div className="border-t border-gray-200 my-1" />
            ) : (
              <button
                className="w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-blue-100"
                onClick={() => {
                  item.onClick?.()
                  onClose()
                }}
              >
                {item.icon && (
                  <img src={item.icon} alt="" className="w-4 h-4" />
                )}
                <span>{item.label}</span>
              </button>
            )}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
} 