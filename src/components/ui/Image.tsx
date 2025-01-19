import { useState } from 'react'
import { winXPColors } from '../../utils/winxp-theme'

interface ImageProps {
  src: string
  alt: string
  className?: string
}

export const Image = ({ src, alt, className = '' }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div 
          className="absolute inset-0 animate-pulse"
          style={{ background: winXPColors.silver.medium }}
        />
      )}
      {hasError ? (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: winXPColors.silver.medium }}
        >
          <span className="text-gray-500">Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
      )}
    </div>
  )
} 