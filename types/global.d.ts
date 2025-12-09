// Global type definitions

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'consent' | 'js' | 'set',
      targetId: string | Date | Record<string, unknown>,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

export {}
