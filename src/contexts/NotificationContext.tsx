import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { WinXPNotification } from '../components/WinXPNotification'
import { winXPAssets } from '../assets/winxp'
import { soundManager } from '../utils/sound-manager'
import { systemNotifications, SystemNotification } from '../services/SystemNotifications'

type NotificationType = 'info' | 'error' | 'success'

interface Notification {
  id: string
  title: string
  message: string
  type: NotificationType
  icon?: string
}

interface NotificationContextType {
  showNotification: (title: string, message: string, type?: NotificationType, icon?: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [lastNotificationIndex, setLastNotificationIndex] = useState(0)

  const showNotification = (
    title: string, 
    message: string, 
    type: NotificationType = 'info',
    icon?: string
  ) => {
    const id = Date.now().toString()
    const notification = { id, title, message, type, icon }
    
    // Play sound based on type
    soundManager.play(type === 'error' ? 'error' : type === 'success' ? 'notify' : 'click')

    setNotifications(prev => [...prev, notification])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 5000)
  }

  // Auto notifications
  useEffect(() => {
    // Show initial notification after 2 seconds
    const initialTimeout = setTimeout(() => {
      const notification = systemNotifications[0]
      showNotification(notification.title, notification.message, notification.type, notification.icon)
    }, 2000)

    // Show random notifications periodically
    const interval = setInterval(() => {
      const nextIndex = (lastNotificationIndex + 1) % systemNotifications.length
      const notification = systemNotifications[nextIndex]
      showNotification(notification.title, notification.message, notification.type, notification.icon)
      setLastNotificationIndex(nextIndex)
    }, 15000) // Show a new notification every 15 seconds

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [lastNotificationIndex])

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
            icon={notification.icon}
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