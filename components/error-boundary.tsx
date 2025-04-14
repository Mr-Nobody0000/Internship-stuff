"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error.message)

    // Don't log the full error stack in production
    if (process.env.NODE_ENV !== "production") {
      console.error("Error details:", error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 rounded-md bg-red-50 border border-red-200 text-red-700">
            <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
            <p>Please try refreshing the page</p>
          </div>
        )
      )
    }

    return this.props.children
  }
}
