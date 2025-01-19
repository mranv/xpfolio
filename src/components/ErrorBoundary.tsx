import React, { Component, ErrorInfo, ReactNode } from 'react'
import { winXPColors } from '../utils/winxp-theme'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div 
          className="flex items-center justify-center min-h-[200px] p-6 rounded-lg"
          style={{ background: winXPColors.silver.medium }}
        >
          <div className="text-center">
            <span className="text-4xl mb-4 block">😕</span>
            <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
            <p className="text-gray-600">Please try refreshing the page</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 