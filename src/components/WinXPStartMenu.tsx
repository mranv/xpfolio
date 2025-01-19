import { m as motion, AnimatePresence } from 'framer-motion'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'
import { Link } from 'react-router-dom'

interface StartMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const WinXPStartMenu = ({ isOpen, onClose }: StartMenuProps) => {
  const menuItems = [
    {
      icon: winXPAssets.icons.myComputer,
      label: 'My Computer',
      description: 'View system information',
      onClick: () => {}
    },
    {
      icon: winXPAssets.icons.myDocuments,
      label: 'My Documents',
      description: 'View projects and publications',
      onClick: () => {}
    },
    {
      icon: winXPAssets.icons.security,
      label: 'Security Center',
      description: 'View security metrics and certifications',
      onClick: () => {}
    }
  ]

  const bottomItems = [
    {
      icon: winXPAssets.icons.shutdown,
      label: 'Turn Off Computer',
      onClick: () => {}
    },
    {
      icon: winXPAssets.icons.user,
      label: 'Log Off',
      onClick: () => {}
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          {/* Start Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-12 left-0 w-80 bg-white shadow-lg rounded-t-lg overflow-hidden z-50"
            style={{ border: `1px solid ${winXPColors.silver.dark}` }}
          >
            {/* User Section */}
            <div className="p-4 flex items-center space-x-3" style={{ 
              background: `linear-gradient(to right, ${winXPColors.blue.primary}, ${winXPColors.blue.secondary})`
            }}>
              <img 
                src={winXPAssets.icons.user} 
                alt="User" 
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div className="text-white">
                <h3 className="font-bold">Anubhav Gain</h3>
                <p className="text-sm opacity-90">DevSecOps Engineer</p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="w-full flex items-start p-2 hover:bg-blue-50 rounded group"
                >
                  <img src={item.icon} alt="" className="w-8 h-8 mr-3" />
                  <div className="text-left">
                    <span className="font-medium group-hover:text-blue-600">
                      {item.label}
                    </span>
                    <p className="text-xs text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Separator */}
            <div className="border-t border-gray-200 my-2" />

            {/* Bottom Items */}
            <div className="p-2 bg-gray-50">
              {bottomItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="w-full flex items-center space-x-3 p-2 hover:bg-blue-50 rounded"
                >
                  <img src={item.icon} alt="" className="w-6 h-6" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 