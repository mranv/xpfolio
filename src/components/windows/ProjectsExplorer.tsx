import { WinXPWindow } from '../ui/WinXPWindow'
import { winXPAssets } from '../../assets/winxp'
import { winXPColors } from '../../utils/winxp-theme'
import { motion } from 'framer-motion'

export const ProjectsExplorer = ({ onClose }: { onClose: () => void }) => {
  const projects = [
    {
      name: 'ebpf-file-monitor',
      description: 'Advanced file monitoring using inotify API and eBPF technology',
      tech: ['Rust', 'eBPF', 'Linux'],
      icon: winXPAssets.icons.dev
    },
    {
      name: 'rshell Backdoor',
      description: 'Secure network communication implementation in Rust',
      tech: ['Rust', 'Networking', 'Security'],
      icon: winXPAssets.icons.network
    },
    {
      name: 'Security Automation Suite',
      description: 'DevSecOps tooling for automated security testing',
      tech: ['Python', 'CI/CD', 'AWS'],
      icon: winXPAssets.icons.security
    }
  ]

  return (
    <WinXPWindow
      title="Projects Explorer"
      icon={winXPAssets.icons.folder}
      onClose={onClose}
      defaultPosition={{ x: 150, y: 100 }}
    >
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg"
            style={{ background: winXPColors.silver.light }}
          >
            <div className="flex items-start space-x-4">
              <img src={project.icon} alt="" className="w-8 h-8" />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{project.name}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded"
                      style={{ background: winXPColors.blue.hover }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </WinXPWindow>
  )
} 