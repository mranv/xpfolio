import { ButtonHTMLAttributes } from 'react'
import { winXPColors } from '../../utils/winxp-theme'

interface WinXPButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'start'
  icon?: string
}

export const WinXPButton = ({ 
  children, 
  variant = 'primary',
  icon,
  className = '',
  ...props 
}: WinXPButtonProps) => {
  const getStyle = () => {
    switch (variant) {
      case 'start':
        return {
          background: `linear-gradient(to bottom, ${winXPColors.green.start}, ${winXPColors.green.hover})`,
          color: 'white',
          border: `1px solid ${winXPColors.green.hover}`
        }
      case 'secondary':
        return {
          background: `linear-gradient(to bottom, ${winXPColors.silver.light}, ${winXPColors.silver.medium})`,
          color: 'black',
          border: `1px solid ${winXPColors.silver.dark}`
        }
      default:
        return {
          background: `linear-gradient(to bottom, ${winXPColors.blue.primary}, ${winXPColors.blue.secondary})`,
          color: 'white',
          border: `1px solid ${winXPColors.blue.secondary}`
        }
    }
  }

  const style = getStyle()

  return (
    <button
      className={`px-4 py-2 rounded flex items-center justify-center hover:opacity-90 active:opacity-100 ${className}`}
      style={{
        ...style,
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
      }}
      {...props}
    >
      {icon && <img src={icon} alt="" className="w-4 h-4 mr-2" />}
      {children}
    </button>
  )
} 