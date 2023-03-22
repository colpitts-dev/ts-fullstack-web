import { Outlet } from 'react-router-dom'
import Header from '@components/header/header.component'

export const PublicLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <footer></footer> */}
    </>
  )
}
