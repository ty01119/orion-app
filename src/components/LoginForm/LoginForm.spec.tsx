import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LoginForm } from '../LoginForm/LoginForm'
import userEvent from '@testing-library/user-event'

const defaultProps = {
  onSubmit: jest.fn(),
  loginStatus: { isLogin: false, errorMessage: '' }
}

describe('LoginForm', () => {
  test('renders component rendered', () => {
    render(<LoginForm {...defaultProps} />)
    expect(screen.getByText('Clinical Portal Sign In')).toBeInTheDocument()
  })
  test('renders username and password fields', () => {
    render(<LoginForm {...defaultProps} />)
    expect(screen.getByTestId('username')).toBeInTheDocument()
    expect(screen.getByTestId('password')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  test('event handler is called when form is submitted', () => {
    const handleSubmit = jest.fn()
    render(<LoginForm {...defaultProps} onSubmit={handleSubmit} />)
    const username = screen.getByTestId('username')
    const password = screen.getByTestId('password')
    const submitButton = screen.getByRole('button')
    userEvent.type(username, 'joshs')
    userEvent.type(password, 'joshs_pw')
    userEvent.click(submitButton)
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
