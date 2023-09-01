import { css } from 'styled-components'

export const BREAKPOINTS = {
  xsmall: 375,
  small: 576,
  medium: 768,
  large: 992,
  xl: 1200,
  xxl: 1400
}

const mediaqueries = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
  const size = BREAKPOINTS[label]
  accumulator[label] = (...args) => css`
    @media (max-width: ${size}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default mediaqueries
