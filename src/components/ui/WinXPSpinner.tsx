import { winXPColors } from '../../utils/winxp-theme'

export const WinXPSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin mb-2"
        style={{ 
          borderColor: winXPColors.blue.primary,
          borderTopColor: 'transparent'
        }} 
      />
      <p className="text-sm" style={{ color: winXPColors.blue.primary }}>
        Please wait...
      </p>
    </div>
  )
} 