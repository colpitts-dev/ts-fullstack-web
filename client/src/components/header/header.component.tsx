import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl py-6 mx-2 xl:mx-auto">
      <div className="flex items-center space-x-2">
        <Link to="/" className="px-2">
          <h2>
            <span className="px-2 py-1 mr-1 text-2xl font-bold text-white rounded-lg bg-primary">
              local
            </span>
            <span className="hidden text-xl sm:inline">community</span>
          </h2>
        </Link>
      </div>
      <nav className="flex items-center mr-2 space-x-2">
        <Link to="/" className="px-2 py-1 hover:text-primary">
          Home
        </Link>
        <Link to="/auth" className="px-2 py-1 hover:text-primary">
          Sign In
        </Link>
      </nav>
    </header>
  )
}

export default Header
