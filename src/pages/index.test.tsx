import { render } from '@testing-library/react'
import { describe, it } from "vitest";
import Home from '.';

describe('home page', () => {
  it('should render', () => {
    render(<Home />)
  })
})