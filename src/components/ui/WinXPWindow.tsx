import { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { winXPColors } from '../../utils/winxp-theme'

interface WinXPWindowProps {
  title: string
  children: ReactNode
  className?: string
  icon?: string
  onClose?: () => void
  defaultPosition?: { x: number; y: number }
  isResizable?: boolean
}

export const WinXPWindow = ({ 
  title, 
  children, 
  className = '',
  icon,
  onClose,
  defaultPosition,
  isResizable = true
}: WinXPWindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <motion.div 
      drag={!isMaximized}
      dragMomentum={false}
      dragListener={!isDragging}
      initial={defaultPosition}
      animate={isMaximized ? {
        x: 0,
        y: 0,
        width: '100%',
        height: '100%'
      } : undefined}
      className={`rounded-lg overflow-hidden shadow-xl ${className} ${
        isMaximized ? 'fixed inset-0' : 'relative'
      }`}
      style={{ 
        background: winXPColors.silver.medium,
        border: `1px solid ${winXPColors.silver.dark}`,
        resize: isResizable && !isMaximized ? 'both' : 'none',
        overflow: 'auto'
      }}
    >
      {/* Title Bar */}
      <div 
        className="px-2 py-1 flex items-center justify-between cursor-move"
        style={{ 
          background: `linear-gradient(to right, ${winXPColors.blue.primary}, ${winXPColors.blue.secondary})`,
          borderBottom: `1px solid ${winXPColors.blue.secondary}`
        }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
      >
        <div className="flex items-center">
          {icon && (
            <img src={icon} alt="" className="w-4 h-4 mr-2" />
          )}
          <h3 className="text-white font-bold text-sm">{title}</h3>
        </div>
        <div className="flex space-x-1">
          <button 
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-blue-400/20"
            onClick={() => setIsMaximized(false)}
          >
            <span className="text-white text-lg">_</span>
          </button>
          <button 
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-blue-400/20"
            onClick={() => setIsMaximized(!isMaximized)}
          >
            <span className="text-white text-lg">□</span>
          </button>
          <button 
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-red-500"
            onClick={onClose}
          >
            <span className="text-white text-lg">×</span>
          </button>
        </div>
      </div>
      
      {/* Window Content */}
      <div className="p-4 overflow-auto" style={{ background: winXPColors.silver.light }}>
        {children}
      </div>
    </motion.div>
  )
} 