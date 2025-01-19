import { useState, useEffect } from 'react'

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024 && window.innerWidth >= 768)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth < 1024 && window.innerWidth >= 768)
      setIsDesktop(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobile, isTablet, isDesktop }
} 