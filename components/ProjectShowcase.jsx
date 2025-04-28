import styled from '@emotion/styled'
import { laptopMedium, renderRichText, smallLaptop } from '../lib/utils/layout'
import Tags from './Tags'
import { useAtomValue } from 'jotai'
import { hoveredTagAtom } from '../lib/state'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span ${({ span }) => span};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;

  // dropshadow
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  a > img {
    width: 100%;
    /* padding: 4px; */
    height: auto;
  }

  transition: opacity 0.2s ease-in-out;
`

const Text = styled.div`
  padding: 8px 8px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  /* max-height: 120px; */
  overflow: hidden;

  a > h3 {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 0;
    margin-bottom: 8px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  > p {
    margin: 0;
    font-size: 14px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.7);

    a {
      color: #4d7c8a;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`

const Footer = styled.div`
  margin: 4px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const imageIsSvg = (image) => {
  return image.url.endsWith('.svg')
}

const ProjectShowcase = ({
  title,
  link,
  image,
  description,
  date,
  tags,
  span = 1,
}) => {
  const hoveredTag = useAtomValue(hoveredTagAtom)

  const hoveredTagInTags = tags.some((tag) => tag === hoveredTag)

  return (
    <Container
      span={span}
      style={{ opacity: !hoveredTag || hoveredTagInTags ? 1 : 0.25 }}
    >
      {image && (
        <a href={link}>
          <img
            src={image.url}
            alt={image.description}
            style={{
              padding: imageIsSvg(image) ? 8 : 0,
            }}
          ></img>
        </a>
      )}
      <Text>
        {title && (
          <a href={link}>
            <h3>{title}</h3>
          </a>
        )}
        {description && renderRichText(description)}
        <Footer>
          <Tags tags={tags} />
          <Text
            style={{
              alignSelf: 'flex-end',
              // backgroundColor: 'rgba(0, 0, 0, 0.1)',
              padding: 0,
              margin: 0,
              fontSize: '11px',
              fontWeight: 'bold',
              color: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            {date?.slice(0, 10)}
          </Text>
        </Footer>
      </Text>
    </Container>
  )
}

export default ProjectShowcase
