import { motion } from 'framer-motion'

export type Props = {
  colors: {
    fill: string[];
  }
  duration: {
    delay: number
    duration: number;
    repeat: number;
  }
}

export const Dollar = ({ colors, duration }: Props) => {
  return (
    <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path animate={colors} transition={duration} fillRule="evenodd" clipRule="evenodd" d="M12 0.25C12.4142 0.25 12.75 0.585786 12.75 1V23C12.75 23.4142 12.4142 23.75 12 23.75C11.5858 23.75 11.25 23.4142 11.25 23V1C11.25 0.585786 11.5858 0.25 12 0.25Z" fill="white" />
      <motion.path animate={colors}
        transition={duration} fillRule="evenodd" clipRule="evenodd" d="M4.75 7.5C4.75 4.60049 7.10049 2.25 10 2.25H17.4998L17.5 3L17.4999 3.75H10C7.92891 3.75 6.25 5.42891 6.25 7.5C6.25 9.57109 7.92891 11.25 10 11.25C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75C7.10049 12.75 4.75 10.3995 4.75 7.5ZM18.25 3C18.25 3.41421 17.9142 3.75 17.4999 3.75L17.5 3L17.4998 2.25C17.914 2.25 18.25 2.58579 18.25 3Z" fill="white" />
      <motion.path animate={colors}
        transition={duration} fillRule="evenodd" clipRule="evenodd" d="M9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C16.8995 11.25 19.25 13.6005 19.25 16.5C19.25 19.3995 16.8995 21.75 14 21.75H6.50023L6.5 21L6.50006 20.25H14C16.0711 20.25 17.75 18.5711 17.75 16.5C17.75 14.4289 16.0711 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM5.75 21C5.75 20.5858 6.08584 20.25 6.50006 20.25L6.5 21L6.50023 21.75C6.08602 21.75 5.75 21.4142 5.75 21Z" fill="white" />
    </motion.svg>
  )
}