import { useState } from 'react'
import { WinXPWindow } from '../components/ui/WinXPWindow'
import { winXPColors } from '../utils/winxp-theme'
import { winXPAssets } from '../assets/winxp'
import { motion } from 'framer-motion'

export const Dashboard = () => {
  const [windows, setWindows] = useState([
    { id: 'stats', isOpen: true },
    { id: 'activity', isOpen: true }
  ])

  const toggleWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isOpen: !w.isOpen } : w
    ))
  }

  return (
    <div className="p-4">
      {/* Stats Window */}
      {windows.find(w => w.id === 'stats')?.isOpen && (
        <WinXPWindow
          title="System Statistics"
          icon={winXPAssets.icons.myComputer}
          onClose={() => toggleWindow('stats')}
          defaultPosition={{ x: 50, y: 50 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded"
                style={{ background: winXPColors.silver.light }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{stat.icon}</span>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: winXPColors.blue.primary }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </WinXPWindow>
      )}

      {/* Activity Window */}
      {windows.find(w => w.id === 'activity')?.isOpen && (
        <WinXPWindow
          title="Recent Activity"
          icon={winXPAssets.icons.folder}
          onClose={() => toggleWindow('activity')}
          defaultPosition={{ x: 100, y: 300 }}
        >
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded"
                style={{ background: winXPColors.silver.medium }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-xl">{activity.icon}</span>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-sm ${
                  activity.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  activity.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {activity.status}
                </span>
              </motion.div>
            ))}
          </div>
        </WinXPWindow>
      )}
    </div>
  )
}

const stats = [
  {
    label: "Total Users",
    value: "12,345",
    icon: "👥"
  },
  {
    label: "Revenue",
    value: "$54,321",
    icon: "💰"
  },
  {
    label: "Active Projects",
    value: "42",
    icon: "🚀"
  }
]

const activities = [
  {
    icon: "📊",
    title: "New Analytics Report",
    time: "2 minutes ago",
    status: "Completed"
  },
  {
    icon: "👤",
    title: "New User Registration",
    time: "1 hour ago",
    status: "Pending"
  },
  {
    icon: "💳",
    title: "Payment Received",
    time: "3 hours ago",
    status: "Completed"
  },
  {
    icon: "🔔",
    title: "System Update",
    time: "5 hours ago",
    status: "In Progress"
  }
] 