import { useState, useRef } from 'react'
import { m as motion } from 'framer-motion'
import { winXPColors } from '../../utils/winxp-theme'
import { useResponsive } from '../../hooks/useResponsive'

interface WinXPWindowProps {
  title: string
  icon?: string
  children: React.ReactNode
  onClose?: () => void
  defaultPosition?: { x: number; y: number }
  isResizable?: boolean
}

export const WinXPWindow = ({
  title,
  icon,
  children,
  onClose,
  defaultPosition,
  isResizable = true
}: WinXPWindowProps) => {
  const { isMobile, isTablet } = useResponsive()
  const [isDragging, setIsDragging] = useState(false)
  const constraintsRef = useRef(null)

  const windowSize = isMobile ? 'w-[95vw] h-[80vh]' :
                    isTablet ? 'w-[85vw] h-[75vh]' :
                    'w-[70vw] h-[70vh]'

  return (
    <motion.div
      ref={constraintsRef}
      initial={defaultPosition}
      drag={!isMobile}
      dragMomentum={false}
      dragListener={!isDragging}
      className={`
        fixed bg-white rounded-lg shadow-xl overflow-hidden
        ${windowSize}
        ${isResizable && !isMobile ? 'resize' : ''}
      `}
      style={{ 
        border: `1px solid ${winXPColors.silver.dark}`,
        maxWidth: '95vw',
        maxHeight: '90vh'
      }}
    >
      {/* Title Bar */}
      <div 
        className="px-4 py-2 flex items-center justify-between cursor-move"
        style={{ 
          background: `linear-gradient(to right, ${winXPColors.blue.primary}, ${winXPColors.blue.secondary})`
        }}
        onMouseDown={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
      >
        <div className="flex items-center space-x-2">
          {icon && <img src={icon} alt="" className="w-4 h-4" />}
          <span className="text-white text-sm font-bold truncate max-w-[200px]">
            {title}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <WindowButton onClick={onClose}>×</WindowButton>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 overflow-auto h-[calc(100%-2.5rem)]">
        {children}
      </div>
    </motion.div>
  )
}

const WindowButton = ({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode
  onClick?: () => void 
}) => (
  <button
    onClick={onClick}
    className="w-6 h-6 flex items-center justify-center text-white hover:bg-white/20 rounded"
  >
    {children}
  </button>
) 