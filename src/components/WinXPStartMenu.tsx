import { m as motion, AnimatePresence } from 'framer-motion'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'
import { soundManager } from '../utils/sound-manager'

interface StartMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpenWindow: (id: string, title: string) => void
}

export const WinXPStartMenu = ({ isOpen, onClose, onOpenWindow }: StartMenuProps) => {
  const handleMenuClick = (id: string, title: string) => {
    soundManager.play('click')
    onOpenWindow(id, title)
    onClose()
  }

  const menuItems = [
    {
      id: 'my-computer',
      icon: winXPAssets.icons.myComputer,
      label: 'My Computer',
      description: 'View system information',
      onClick: () => handleMenuClick('my-computer', 'My Computer')
    },
    {
      id: 'security-center',
      icon: winXPAssets.icons.security,
      label: 'Security Center',
      description: 'View security metrics and certifications',
      onClick: () => handleMenuClick('security-center', 'Security Center')
    },
    {
      id: 'projects',
      icon: winXPAssets.icons.folder,
      label: 'My Projects',
      description: 'View projects and publications',
      onClick: () => handleMenuClick('projects', 'My Projects')
    }
  ]

  const bottomItems = [
    {
      icon: winXPAssets.icons.shutdown,
      label: 'Turn Off Computer',
      onClick: () => window.close()
    },
    {
      icon: winXPAssets.icons.user,
      label: 'Log Off',
      onClick: () => window.location.reload()
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-12 left-0 w-96 bg-[#D3E5FA] shadow-xl overflow-hidden z-50"
            style={{ 
              border: '1px solid #0831D9',
              borderRadius: '8px 8px 0 0'
            }}
          >
            {/* User Section - Classic XP Blue */}
            <div 
              className="h-24 p-4 flex items-center space-x-4"
              style={{ 
                background: 'linear-gradient(to right, #245EDC, #3C91F9)',
                borderBottom: '1px solid #1550C4'
              }}
            >
              <img 
                src={winXPAssets.icons.user} 
                alt="User" 
                className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
              />
              <div className="text-white">
                <h3 className="text-lg font-bold drop-shadow">Anubhav Gain</h3>
                <p className="text-sm text-white/90">DevSecOps Engineer</p>
              </div>
            </div>

            <div className="flex">
              {/* Left Column - Main Menu */}
              <div className="w-3/5 p-2 space-y-1 bg-white">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="w-full flex items-start p-2 hover:bg-[#2F71E3] hover:text-white rounded transition-colors group"
                  >
                    <img src={item.icon} alt="" className="w-8 h-8 mr-3" />
                    <div className="text-left">
                      <span className="font-medium">{item.label}</span>
                      <p className="text-xs group-hover:text-white/90">
                        {item.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Column - Quick Links */}
              <div className="w-2/5 bg-[#D3E5FA] p-2 space-y-1">
                <div className="text-xs font-bold text-gray-700 px-2 mb-2">
                  Quick Links
                </div>
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={link.onClick}
                    className="w-full flex items-center space-x-3 p-2 hover:bg-[#2F71E3] hover:text-white rounded text-sm"
                  >
                    <img src={link.icon} alt="" className="w-5 h-5" />
                    <span>{link.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div 
              className="border-t border-gray-300 bg-[#D3E5FA]"
              style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}
            >
              <div className="p-2 space-y-1">
                {bottomItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="w-full flex items-center space-x-3 p-2 hover:bg-[#2F71E3] hover:text-white rounded"
                  >
                    <img src={item.icon} alt="" className="w-6 h-6" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const quickLinks = [
  {
    icon: winXPAssets.icons.myDocuments,
    label: 'My Documents',
    onClick: () => {}
  },
  {
    icon: winXPAssets.icons.myComputer,
    label: 'My Computer',
    onClick: () => {}
  },
  {
    icon: winXPAssets.icons.network,
    label: 'Network',
    onClick: () => {}
  }
] 