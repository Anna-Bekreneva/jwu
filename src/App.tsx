import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage, PrivacyPolicyPage } from '@/pages'
import { APP_ROUTES } from '@/utils'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path={APP_ROUTES.home} />
        <Route element={<PrivacyPolicyPage />} path={APP_ROUTES.privacyPolicy} />
      </Routes>
    </BrowserRouter>
  )
}
