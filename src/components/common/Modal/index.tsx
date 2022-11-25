import { AnimatePresence, } from 'framer-motion';
import { ReactElement, ReactNode, useState } from 'react';
import { Wrapper, Controls, Box } from './styled'

type Props = {
  // show: boolean
  // handleShow: () => void
  children: ReactElement
  title: string
}

const Modal = ({ children, title }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper key={children.key}>
      <Controls
        whileTap={{ scale: 0.50 }}
        onClick={() => setShow(!show)}>
        {show ? `change ${title}` : title}
      </Controls>
      <AnimatePresence>
        {show ? children : null}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Modal