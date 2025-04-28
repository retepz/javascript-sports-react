import type React from 'react'

type MainContentProps = {
  children: React.ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main
      style={{
        flexGrow: 1,
      }}
    >
      {children}
    </main>
  )
}
