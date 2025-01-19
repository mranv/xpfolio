import { createContext, useContext, useState, ReactNode } from 'react'
import { WinXPNotification } from '../components/WinXPNotification'
import { winXPAssets } from '../assets/winxp'
import { soundManager } from '../utils/sound-manager'

type NotificationType = 'info' | 'error' | 'success'

interface Notification {
  id: string
  title: string
  message: string
  type: NotificationType
}

interface NotificationContextType {
  showNotification: (title: string, message: string, type?: NotificationType) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const showNotification = (title: string, message: string, type: NotificationType = 'info') => {
    const id = Date.now().toString()
    const notification = { id, title, message, type }
    
    // Play sound based on type
    soundManager.play(type === 'error' ? 'error' : type === 'success' ? 'notify' : 'click')

    setNotifications(prev => [...prev, notification])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 5000)
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed bottom-16 right-4 space-y-4 z-50">
        {notifications.map((notification) => (
          <WinXPNotification
            key={notification.id}
            title={notification.title}
            message={notification.message}
            type={notification.type}
            isVisible={true}
            onClose={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
} 