import { keyframes } from "styled-components"

export const pulse = keyframes`
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.95);
  }
`
export const aura = keyframes`
  25%,
  75% {
    border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
  }
  50% {
    border-radius: 40% 60% 60% 40% / 40% 60% 40% 60%;
  }
  100% {
    transform: rotate(360deg);
  }
`
