import { WinXPWindow } from '../ui/WinXPWindow'
import { winXPAssets } from '../../assets/winxp'
import { winXPColors } from '../../utils/winxp-theme'
import { motion } from 'framer-motion'

export const SecurityDashboard = ({ onClose }: { onClose: () => void }) => {
  const securityMetrics = [
    {
      title: 'Security Score',
      value: '98%',
      icon: winXPAssets.icons.shield,
      color: 'text-green-600'
    },
    {
      title: 'Projects Secured',
      value: '150+',
      icon: winXPAssets.icons.security,
      color: 'text-blue-600'
    },
    {
      title: 'Vulnerabilities Patched',
      value: '2.5K+',
      icon: winXPAssets.icons.dev,
      color: 'text-purple-600'
    }
  ]

  const certifications = [
    'IBM Cybersecurity Analyst Professional',
    'Google Cybersecurity Specialist',
    'AWS Security Expert',
    'C3SA Premium Edition - CyberWarFare Labs'
  ]

  return (
    <WinXPWindow
      title="Security Dashboard - Anubhav Gain"
      icon={winXPAssets.icons.shield}
      onClose={onClose}
      defaultPosition={{ x: 100, y: 50 }}
    >
      <div className="space-y-6">
        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {securityMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg"
              style={{ background: winXPColors.silver.light }}
            >
              <div className="flex items-center space-x-3">
                <img src={metric.icon} alt="" className="w-8 h-8" />
                <div>
                  <h3 className="font-bold text-sm">{metric.title}</h3>
                  <span className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b pb-2">Core Expertise</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <img src={winXPAssets.icons.security} alt="" className="w-5 h-5" />
                <span>DevSecOps Integration & Architecture</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={winXPAssets.icons.shield} alt="" className="w-5 h-5" />
                <span>Cloud Security (AWS, Azure, GCP)</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={winXPAssets.icons.network} alt="" className="w-5 h-5" />
                <span>SIEM Implementation & Management</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b pb-2">Certifications</h2>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <motion.li
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <img src={winXPAssets.icons.details} alt="" className="w-5 h-5" />
                  <span>{cert}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent Publications */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b pb-2">Recent Publications</h2>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold">The Role of Forensic Scientists in Crime Investigation</h3>
            <p className="text-sm text-gray-600">Published in The Open University, July 2023</p>
            <p className="mt-2">
              Comprehensive analysis of modern forensic techniques and their application
              in cybercrime investigation.
            </p>
          </div>
        </div>
      </div>
    </WinXPWindow>
  )
} 