export const sizes = {
  mobile: 640,
  tablet: 940,
  smallLaptop: 1200,
  laptop: 1440,
}

export const mobile = () => `@media (max-width: ${sizes.mobile}px)`
export const tablet = () => `@media (max-width: ${sizes.tablet}px)`
export const smallLaptop = () => `@media (max-width: ${sizes.smallLaptop}px)`
export const laptop = () => `@media (max-width: ${sizes.laptop}px)`
export const middleContent = ({ padding = true } = {}) => `
  margin: 0 auto;
  width: 80%;

  ${mobile()} {
    width: 100%;
    ${padding && 'padding: 1em;'} 
  }
`
