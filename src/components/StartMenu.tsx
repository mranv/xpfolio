import { motion } from 'framer-motion'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'
import { Link } from 'react-router-dom'

interface StartMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const StartMenu = ({ isOpen, onClose }: StartMenuProps) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-12 left-0 w-64 bg-white shadow-lg rounded-t-lg overflow-hidden z-50"
      style={{ border: `1px solid ${winXPColors.blue.secondary}` }}
    >
      {/* User Section */}
      <div className="p-4" style={{ background: winXPColors.blue.primary }}>
        <div className="flex items-center space-x-3">
          <img 
            src={winXPAssets.icons.user} 
            alt="User" 
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white font-bold">Anubhav Gain</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        <MenuItem 
          icon={winXPAssets.icons.myComputer} 
          to="/"
          onClick={onClose}
        >
          Home
        </MenuItem>
        <MenuItem 
          icon={winXPAssets.icons.folder} 
          to="/projects"
          onClick={onClose}
        >
          Projects
        </MenuItem>
        <MenuItem 
          icon={winXPAssets.icons.myDocuments} 
          to="/dashboard"
          onClick={onClose}
        >
          Dashboard
        </MenuItem>
      </div>

      {/* Bottom Section */}
      <div 
        className="p-2 border-t"
        style={{ background: winXPColors.silver.medium }}
      >
        <button 
          className="w-full text-left px-4 py-2 rounded hover:bg-blue-100 flex items-center space-x-2"
          onClick={onClose}
        >
          <img src={winXPAssets.icons.shutdown} alt="" className="w-4 h-4" />
          <span>Close Menu</span>
        </button>
      </div>
    </motion.div>
  )
}

const MenuItem = ({ 
  icon, 
  children, 
  to, 
  onClick 
}: { 
  icon: string
  children: React.ReactNode
  to: string
  onClick: () => void
}) => (
  <Link
    to={to}
    className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-100"
    onClick={onClick}
  >
    <img src={icon} alt="" className="w-6 h-6" />
    <span>{children}</span>
  </Link>
) 