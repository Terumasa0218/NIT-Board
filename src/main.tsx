import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import i18n from './i18n'
import './index.css'

// Initialize i18n and render app
const initializeApp = async () => {
  try {
    console.log('Initializing i18n...')
    await i18n.init()
    console.log('i18n initialized successfully')
  } catch (error) {
    console.error('Failed to initialize i18n:', error)
  }

  // Render app regardless of i18n initialization result
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--toast-bg)',
              color: 'var(--toast-color)',
              border: '1px solid var(--toast-border)',
            },
          }}
        />
      </BrowserRouter>
    </React.StrictMode>,
  )
}

// Start the app
initializeApp()
