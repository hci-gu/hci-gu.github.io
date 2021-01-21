export const mobile = () => `@media (max-width: 640px)`
export const tablet = () => `@media (max-width: 940px)`
export const smallLaptop = () => `@media (max-width: 1200px)`
export const laptop = () => `@media (max-width: 1440px)`
export const middleContent = ({ padding = true } = {}) => `
  margin: 0 auto;
  width: 80%;

  ${mobile()} {
    width: 100%;
    ${padding && 'padding: 1em;'} 
  }
`
