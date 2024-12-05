import styled from '@emotion/styled'
import { laptopMedium, renderRichText, smallLaptop } from '../lib/utils/layout'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span ${({ span }) => span};

  a > img {
    width: 100%;
    /* padding: 4px; */
    height: auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`

const Text = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  /* max-height: 120px; */
  overflow: hidden;

  a > h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;

    :hover {
      text-decoration: underline;
    }
  }

  > p {
    margin: 0;
    font-size: 14px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);

    a {
      color: #4d7c8a;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`

const ProjectShowcase = ({ title, link, image, description, span = 1 }) => {
  return (
    <Container span={span}>
      {image && (
        <a href={link}>
          <img src={image.url} alt={image.description}></img>
        </a>
      )}
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
