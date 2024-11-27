import styled from '@emotion/styled'
import { mobile, tablet } from '../lib/utils/layout'

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;

  ${tablet()} {
    grid-template-columns: 1fr 1fr;
  }

  ${mobile()} {
    grid-template-columns: 1fr;
  }

  justify-items: center;
`

const ProjectGrid = ({ children }) => {
  return <Container>{children}</Container>
}

export default ProjectGrid
