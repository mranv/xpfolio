import { useState } from 'react'
import { WinXPWindow } from '../components/ui/WinXPWindow'
import { winXPAssets } from '../assets/winxp'
import { winXPColors } from '../utils/winxp-theme'
import { motion } from 'framer-motion'

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <div className="p-4">
      <WinXPWindow
        title="My Projects"
        icon={winXPAssets.icons.folder}
        defaultPosition={{ x: 100, y: 50 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project.title)}
              className="cursor-pointer p-4 rounded hover:bg-blue-50 transition-colors"
              style={{ background: 'rgba(255, 255, 255, 0.8)' }}
            >
              <div className="flex items-start space-x-3">
                <img src={project.icon} alt="" className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-sm rounded"
                        style={{ background: winXPColors.silver.medium }}
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

      {selectedProject && (
        <WinXPWindow
          title={`Project Details - ${selectedProject}`}
          icon={winXPAssets.icons.details}
          onClose={() => setSelectedProject(null)}
          defaultPosition={{ x: 150, y: 100 }}
        >
          {/* Project details content */}
        </WinXPWindow>
      )}
    </div>
  )
}

const projects = [
  {
    title: 'Cloud Security Framework',
    description: 'Comprehensive security framework for cloud infrastructure',
    icon: winXPAssets.icons.security,
    technologies: ['AWS', 'Azure', 'Terraform', 'Python'],
    details: '...'
  },
  {
    title: 'DevSecOps Pipeline',
    description: 'Automated security testing and deployment pipeline',
    icon: winXPAssets.icons.dev,
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Rust'],
    details: '...'
  }
  // Add more projects...
] 