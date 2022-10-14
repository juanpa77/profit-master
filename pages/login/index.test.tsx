import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Login from '.'

describe('Loguin', () => {
  it('should render Logo', () => {
    render(<Login />)

    screen.getByRole('banner')
  })

  it('should render background with')
})