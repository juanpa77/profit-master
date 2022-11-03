import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderWithStore } from '../../renderWithStore'
import Login from '.'
import { Auth, getAuth } from 'firebase/auth';
import type { Mock } from 'vitest'
import { signWithGoogle } from '../../services/firebase/authProvider'
import { LoginBtn } from '../../components/btn/Login';

vi.mock('firebase/auth');
// describe('70646844', () => {
//   it('should pass', async () => {
//     const mAuth = ({ signWithGoogle: vi.fn(), } as unknown as Auth);
//     (getAuth as unknown as Mock).mockReturnValue(mAuth);

//     await signWithGoogle();
//     expect(getAuth).toBeCalledTimes(1);
//     // expect(getAuth().sign).toBeCalledTimes(1); // Better // expect(mAuth.signOut).toBeCalledTimes(1); });
//   });
// })

// describe('61408137', () => {
//   afterEach(cleanup)
//   it('should return user', async () => {
//     // vi.mocked(getAuth(firebaseApp))
//     // signWithGoogle()

//     /* it('should return undefined', () => {
//         vi.mocked(firebase.auth).mockReturnValueOnce({});
//         const actual = App.getLoggedInUser();
//         expect(actual).toBeUndefined();
//       }); */
//   });
// });

describe('Login', () => {
  afterEach(cleanup)

  it('should render login btn', () => {
    render(<LoginBtn onClick={() => { }} />)
    // const { getAllByRole } = renderWithStore(<Login />)
    // getAllByRole("button")
  })

  //   it('should login when user clicking in the login btn', async () => {
  //     const { getByRole } = renderWithStore(<Login />)

  //     const loginBtn = getByRole("button")
  //     // fireEvent.click(loginBtn)
  //   })
})