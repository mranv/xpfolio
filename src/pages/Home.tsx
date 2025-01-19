import { useState } from 'react'
import { WinXPWindow } from '../components/ui/WinXPWindow'
import { WinXPButton } from '../components/ui/WinXPButton'
import { winXPAssets } from '../assets/winxp'
import { motion } from 'framer-motion'

export const Home = () => {
  const [windows, setWindows] = useState([
    { id: 'welcome', isOpen: true },
    { id: 'about', isOpen: false },
    { id: 'skills', isOpen: false }
  ])

  const toggleWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isOpen: !w.isOpen } : w
    ))
  }

  return (
    <div className="p-4">
      {/* Welcome Window */}
      {windows.find(w => w.id === 'welcome')?.isOpen && (
        <WinXPWindow
          title="Welcome - Anubhav Gain"
          icon={winXPAssets.icons.myComputer}
          onClose={() => toggleWindow('welcome')}
          defaultPosition={{ x: 100, y: 50 }}
        >
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="mb-4">
              DevSecOps Engineer & Cyber Security Expert specializing in CI/CD security integration,
              SIEM, cloud security, and vulnerability management.
            </p>
            <div className="flex gap-4">
              <WinXPButton 
                variant="primary"
                onClick={() => toggleWindow('about')}
                icon={winXPAssets.icons.myDocuments}
              >
                About Me
              </WinXPButton>
              <WinXPButton 
                variant="secondary"
                onClick={() => toggleWindow('skills')}
                icon={winXPAssets.icons.folder}
              >
                View Skills
              </WinXPButton>
            </div>
          </div>
        </WinXPWindow>
      )}

      {/* About Window */}
      {windows.find(w => w.id === 'about')?.isOpen && (
        <WinXPWindow
          title="About - Anubhav Gain"
          icon={winXPAssets.icons.myDocuments}
          onClose={() => toggleWindow('about')}
          defaultPosition={{ x: 150, y: 100 }}
        >
          <div className="space-y-4">
            <section>
              <h2 className="text-xl font-bold mb-2">Professional Background</h2>
              <p>
                Experienced DevSecOps Engineer with a strong focus on integrating security 
                into the development lifecycle. Owner of techanv Consulting, specializing in 
                cloud security and infrastructure solutions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">Research & Publications</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Published multiple research articles in cybersecurity</li>
                <li>198 citations on Google Scholar</li>
                <li>h-index of 6</li>
                <li>Contributions in EEG-based emotion recognition</li>
              </ul>
            </section>
          </div>
        </WinXPWindow>
      )}

      {/* Skills Window */}
      {windows.find(w => w.id === 'skills')?.isOpen && (
        <WinXPWindow
          title="Skills & Expertise"
          icon={winXPAssets.icons.folder}
          onClose={() => toggleWindow('skills')}
          defaultPosition={{ x: 200, y: 150 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded"
                style={{ background: 'rgba(255, 255, 255, 0.5)' }}
              >
                <img src={skill.icon} alt="" className="w-8 h-8 mb-2" />
                <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </WinXPWindow>
      )}
    </div>
  )
}

const skills = [
  {
    title: 'DevSecOps',
    icon: winXPAssets.icons.myComputer,
    items: [
      'CI/CD Security Integration',
      'Infrastructure as Code',
      'Container Security',
      'Automated Security Testing'
    ]
  },
  {
    title: 'Security',
    icon: winXPAssets.icons.shield,
    items: [
      'SIEM Implementation',
      'Threat Management',
      'Vulnerability Assessment',
      'Incident Response'
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: winXPAssets.icons.network,
    items: [
      'Cloud Security Architecture',
      'Kubernetes Security',
      'AWS/Azure Security',
      'Infrastructure Hardening'
    ]
  },
  {
    title: 'Programming',
    icon: winXPAssets.icons.dev,
    items: [
      'Rust',
      'Python',
      'PowerShell',
      'Security Automation'
    ]
  }
] 