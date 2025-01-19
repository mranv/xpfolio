import { winXPAssets } from '../assets/winxp'

export interface SystemNotification {
  title: string
  message: string
  type: 'info' | 'error' | 'success'
  icon?: string
}

export const systemNotifications: SystemNotification[] = [
  {
    title: 'Security Update',
    message: 'Your system is protected and up to date.',
    type: 'success',
    icon: winXPAssets.icons.shield
  },
  {
    title: 'System Performance',
    message: 'Memory usage is optimal. System running smoothly.',
    type: 'info',
    icon: winXPAssets.icons.myComputer
  },
  {
    title: 'Network Status',
    message: 'Connected to secure network. Internet speed: Fast',
    type: 'info',
    icon: winXPAssets.icons.network
  },
  {
    title: 'Updates Available',
    message: 'New security features are ready to install.',
    type: 'info',
    icon: winXPAssets.icons.dev
  },
  {
    title: 'Backup Reminder',
    message: 'Last backup was 7 days ago. Consider backing up your data.',
    type: 'warning',
    icon: winXPAssets.icons.myDocuments
  }
] 