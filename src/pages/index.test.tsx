import { render } from '@testing-library/react'
import { describe, it, vi } from "vitest";
import Home from '.';

vi.mock('next/router', () => ({ useRouter: vi.fn }))

describe('home page', () => {
  it('should render', () => {
    render(<Home />)
  })
})