import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { createRoot } from 'react-dom/client'

import './styles/index.scss'

import { App } from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={'/'} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
