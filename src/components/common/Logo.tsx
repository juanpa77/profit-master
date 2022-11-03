import { motion } from "framer-motion"

type Props = {
  fillColor: string
}

const Logo = ({ fillColor }: Props) => {
  const animate = {
    fill: ['#ee2929', '#1b15c4', '#00e1ce', '#c415b3']
  }
  const transition = {
    duration: 2,
    repeat: Infinity
  }
  return (
    <svg width="87" height="90" viewBox="0 0 87 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 25.7578C23 11.5321 34.5322 0 48.7578 0H55.4803C71.7836 0 85 13.2164 85 29.5197V31.248C85 48.3688 71.1208 62.248 54 62.248V62.248C36.8792 62.248 23 48.3688 23 31.248V25.7578Z" fill="#A41ED2" />
      <g filter="url(#filter0_d_363_2913)">
        <path d="M23 50.3804H87V50.3804C87 57.3365 81.3609 62.9756 74.4048 62.9756H35.5952C28.6391 62.9756 23 57.3365 23 50.3804V50.3804Z" fill="#985ABF" />
        <path d="M23 37.7855H87V50.3807H23V37.7855Z" fill="#EF3938" />
        <path d="M23 25.1907H87V37.7859H23V25.1907Z" fill="#EE963F" />
        <path d="M23 12.5948H87V25.1901H23V12.5948Z" fill="#3F89C8" />
        <path d="M23 12.5952C23 5.63906 28.6391 0 35.5952 0H74.4048C81.3609 0 87 5.63906 87 12.5952V12.5952H23V12.5952Z" fill="#D74B88" />
      </g>
      <g >
        <motion.path animate={animate} transition={transition} fillRule="evenodd" clipRule="evenodd" d="M46.8488 24.9405C46.9496 24.911 47.0568 24.911 47.1577 24.9405L53.7667 26.8711C54.0017 26.9398 54.1633 27.1552 54.1633 27.4001V31.3593C54.1633 35.758 51.3483 39.6631 47.1751 41.0536C47.0621 41.0913 46.9399 41.0913 46.8268 41.0536C42.6526 39.6632 39.8367 35.7572 39.8367 31.3575V27.4001C39.8367 27.1552 39.9983 26.9397 40.2334 26.8711L46.8488 24.9405ZM40.9388 27.8133V31.3575C40.9388 35.2213 43.3729 38.6582 47.0009 39.9481C50.6279 38.6582 53.0612 35.2221 53.0612 31.3593V27.8131L47.0031 26.0434L40.9388 27.8133Z" fill={fillColor} />
        <motion.path animate={animate} transition={transition} fillRule="evenodd" clipRule="evenodd" d="M51.0631 30.2226C51.2783 30.4378 51.2783 30.7867 51.0631 31.0019L46.6549 35.41C46.4398 35.6252 46.0909 35.6252 45.8757 35.41L43.3043 32.8386C43.0891 32.6234 43.0891 32.2745 43.3043 32.0593C43.5194 31.8442 43.8683 31.8442 44.0835 32.0593L46.2653 34.2411L50.2838 30.2226C50.499 30.0074 50.8479 30.0074 51.0631 30.2226Z" fill={fillColor} />
      </g>
      <g >
        <motion.path animate={animate} transition={transition} fillRule="evenodd" clipRule="evenodd" d="M60.4485 11.4759C61.1061 11.0962 61.9471 11.3215 62.3268 11.9792L66.5548 19.3023C66.8005 19.728 66.8004 20.2525 66.5544 20.678C66.3084 21.1035 65.854 21.3654 65.3625 21.3648L48.4821 21.3465C47.86 21.3458 47.3159 20.9276 47.1552 20.3267C46.9946 19.7257 47.2574 19.0917 47.7961 18.7807L60.4485 11.4759ZM53.6055 18.6021L62.9809 18.6122L60.6327 14.545L53.6055 18.6021Z" fill={fillColor} />
        <motion.path animate={animate} transition={transition} fillRule="evenodd" clipRule="evenodd" d="M37.5 21.375C37.2469 21.375 37.0417 21.5802 37.0417 21.8333V47.5C37.0417 47.7531 37.2469 47.9583 37.5 47.9583H70.5C70.7532 47.9583 70.9583 47.7532 70.9583 47.5V21.8333C70.9583 21.5802 70.7532 21.375 70.5 21.375H37.5ZM34.2917 21.8333C34.2917 20.0614 35.7281 18.625 37.5 18.625H70.5C72.2719 18.625 73.7083 20.0614 73.7083 21.8333V47.5C73.7083 49.2719 72.2719 50.7083 70.5 50.7083H37.5C35.7281 50.7083 34.2917 49.272 34.2917 47.5V21.8333Z" fill={fillColor} />
        <motion.path animate={animate} transition={transition} fillRule="evenodd" clipRule="evenodd" d="M58.125 34.6666C58.125 31.3135 60.9592 28.7083 64.3125 28.7083H72.3333C73.0927 28.7083 73.7083 29.3239 73.7083 30.0833V39.25C73.7083 40.0094 73.0927 40.625 72.3333 40.625H64.3125C60.9592 40.625 58.125 38.0198 58.125 34.6666ZM64.3125 31.4583C62.35 31.4583 60.875 32.9572 60.875 34.6666C60.875 36.3761 62.35 37.875 64.3125 37.875H70.9583V31.4583H64.3125Z" fill={fillColor} />
        <motion.path animate={animate} transition={transition} fillRule="evenodd" clipRule="evenodd" d="M72.3333 22.75C73.0927 22.75 73.7083 23.3656 73.7083 24.125V46.125C73.7083 46.8844 73.0927 47.5 72.3333 47.5C71.5739 47.5 70.9583 46.8844 70.9583 46.125V24.125C70.9583 23.3656 71.5739 22.75 72.3333 22.75Z" fill={fillColor} />
      </g>
      <defs>
        <filter id="filter0_d_363_2913" x="0" y="0" width="87" height="89.9756" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-14" dy="18" />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_363_2913" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_363_2913" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default Logo