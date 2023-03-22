import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { PublicLayout } from '@components/layouts/public-layout.component'
import { ErrorFallback } from '@components/error-fallback/error-fallback.component'

import { HomePage } from '@pages/home.component'
import { AuthPage } from '@pages/auth.component'

function PublicRoutes() {
  React.useEffect(() => {
    console.log('HOME ROUTES MOUNTED')
    return () => {
      return console.log('DESTROY HOME ROUTES')
    }
  })

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <PublicRoutesBase />
    </ErrorBoundary>
  )
}

function PublicRoutesBase() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="auth" element={<AuthPage />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default PublicRoutes
