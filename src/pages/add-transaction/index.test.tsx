import { render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import AddTransaction from ".";

vi.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '',
    };
  },
}))

describe('Pages AddTransaction', () => {
  it('should render', () => {
    render(<AddTransaction />)
  })
})