import styled from '@emotion/styled'
import { mobile, tablet } from '../lib/utils/layout'
import { Masonry } from 'react-plock'

// const Container = styled.div`
//   display: grid;
//   grid-gap: 20px;
//   grid-template-columns: 1fr 1fr 1fr 1fr;

//   ${tablet()} {
//     grid-template-columns: 1fr 1fr;
//   }

//   ${mobile()} {
//     grid-template-columns: 1fr;
//   }

//   justify-items: center;
// `

const ProjectGrid = ({ children }) => {
  // return null
  return (
    <Masonry
      items={children}
      config={{
        columns: [1, 2, 3],
        gap: [24, 12, 6],
        media: [640, 768, 1024],
      }}
      render={(child) => child}
    />
  )
}

export default ProjectGrid
