import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import type { Route } from './+types/root'
import './app.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainNav from './components/main-nav'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <header
          style={{
            height: '5rem',
            backgroundColor: '#2f0259',
            marginBottom: '.5rem',
            alignContent: 'center',
            display: 'flex',
          }}
        >
          <img
            style={{
              width: '4rem',
              marginLeft: '.5rem',
            }}
            src='/images/logo.svg'
          />
          <div
            style={{
              alignContent: 'center',
              fontSize: '1.5rem',
              marginLeft: '.5rem',
            }}
          >
            <div>Sports</div> <div>React</div>
          </div>
        </header>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <nav
            style={{
              fontSize: '1.2rem',
              width: '11rem',
              maxWidth: '11rem',
              flexGrow: 1,
              flexShrink: 0,
              borderRight: '.1rem solid #a8acbd',
            }}
          >
            <MainNav />
          </nav>
          <main
            style={{
              flexGrow: 1,
            }}
          >
            {children}
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className='pt-16 p-4 container mx-auto'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full p-4 overflow-x-auto'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
