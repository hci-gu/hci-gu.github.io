import styled from '@emotion/styled'
import { laptopMedium, renderRichText, smallLaptop } from '../lib/utils/layout'

const Container = styled.div`
  width: 280px;

  display: flex;
  flex-direction: column;

  a > img {
    width: 100%;
    height: auto;
  }
`

const Text = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  max-height: 120px;
  overflow: hidden;

  a > h3 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;

    :hover {
      text-decoration: underline;
    }
  }

  > p {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`

const ProjectShowcase = ({ title, link, image, description, tags }) => {
  return (
    <Container>
      <a href={link}>
        <img src={image.url} alt={image.description}></img>
      </a>
      <Text>
        <a href={link}>
          <h3>{title}</h3>
        </a>
        {description && renderRichText(description)}
      </Text>
    </Container>
  )
}

export default ProjectShowcase
