import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/router'

const savedTheme = window.localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark)

document.documentElement.classList.toggle('dark', isDark)
document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
