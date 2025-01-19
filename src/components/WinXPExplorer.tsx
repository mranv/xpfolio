import { useState } from 'react'
import { m as motion } from 'framer-motion'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'
import { WinXPWindow } from './ui/WinXPWindow'
import { WinXPButton } from './ui/WinXPButton'

interface FileItem {
  name: string
  type: 'file' | 'folder'
  icon: string
  size?: string
  modified?: string
}

export const WinXPExplorer = () => {
  const [currentPath, setCurrentPath] = useState(['My Computer'])
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  return (
    <WinXPWindow
      title={currentPath.join(' > ')}
      icon={winXPAssets.icons.myComputer}
      defaultPosition={{ x: 100, y: 50 }}
      isResizable
    >
      {/* Toolbar */}
      <div 
        className="flex items-center space-x-2 p-2 border-b"
        style={{ background: winXPColors.silver.medium }}
      >
        <WinXPButton 
          variant="secondary"
          icon={winXPAssets.icons.back}
          onClick={() => setCurrentPath(prev => prev.slice(0, -1))}
          disabled={currentPath.length === 1}
        >
          Back
        </WinXPButton>
        <div className="h-full border-l border-gray-300 mx-2" />
        <WinXPButton variant="secondary" icon={winXPAssets.icons.folder}>
          New Folder
        </WinXPButton>
      </div>

      {/* File List */}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-1">
          {files.map((file) => (
            <motion.div
              key={file.name}
              className={`flex items-center p-2 rounded cursor-pointer ${
                selectedItem === file.name ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedItem(file.name)}
              whileHover={{ scale: 1.01 }}
            >
              <img src={file.icon} alt="" className="w-6 h-6 mr-3" />
              <div className="flex-1">
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">{file.type}</p>
              </div>
              {file.size && (
                <span className="text-sm text-gray-500">{file.size}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div 
        className="px-4 py-2 text-sm border-t"
        style={{ background: winXPColors.silver.medium }}
      >
        {selectedItem ? `Selected: ${selectedItem}` : `${files.length} items`}
      </div>
    </WinXPWindow>
  )
}

const files: FileItem[] = [
  {
    name: 'Documents',
    type: 'folder',
    icon: winXPAssets.icons.folder,
    modified: '2024-01-19'
  },
  {
    name: 'Projects',
    type: 'folder',
    icon: winXPAssets.icons.folder,
    modified: '2024-01-18'
  },
  {
    name: 'report.pdf',
    type: 'file',
    icon: winXPAssets.icons.pdf,
    size: '2.5 MB',
    modified: '2024-01-17'
  }
] 