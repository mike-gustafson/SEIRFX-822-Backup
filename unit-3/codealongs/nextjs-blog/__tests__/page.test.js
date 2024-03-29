import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../pages/index'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    // const heading = screen.getByRole('heading', { level: 1 })
    const h1Element = screen.getByText(/Welcome to my blog!/i);
    expect(h1Element).toBeInTheDocument();
 
    // expect(heading).toBeInTheDocument()
  })
})