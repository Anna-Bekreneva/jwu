import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomePage, PrivacyPolicyPage } from '@/pages'
import { APP_ROUTES } from '@/utils'

export function App() {
  return (
    <>
      <ToastContainer autoClose={50000} position={'bottom-right'} />
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path={APP_ROUTES.home} />
          <Route element={<PrivacyPolicyPage />} path={APP_ROUTES.privacyPolicy} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
