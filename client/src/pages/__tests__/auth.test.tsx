import { render, screen } from '@testing-library/react'
import { AuthPage } from '@pages/auth.component'

describe('Auth Page', () => {
  it('renders the page without crashing', () => {
    render(<AuthPage />)
    const el = screen.getByRole('heading', { name: /sign in/i })
    expect(el).toBeInTheDocument()
  })
})
