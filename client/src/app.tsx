import * as React from 'react'

import { Spinner } from '@components/spinner.component'

// const DashboardRoutes = React.lazy(
//   () => import(/* webpackPrefetch: true */ './routes/dashboard/dashboard.component'),
// )
const PublicRoutes = React.lazy(
  () => import('./routes/public/public.component'),
)

function App() {
  const FullPageSpinner = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    )
  }

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <PublicRoutes />
    </React.Suspense>
  )
}

export default App
