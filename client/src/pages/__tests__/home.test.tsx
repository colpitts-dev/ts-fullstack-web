import { render, screen } from '@testing-library/react'
import { HomePage } from '@pages/home.component'

describe('Home Page', () => {
  it('renders the page without crashing', () => {
    render(<HomePage />)
    const el = screen.getByRole('heading', { name: /public landing/i })
    expect(el).toBeInTheDocument()
  })
})
