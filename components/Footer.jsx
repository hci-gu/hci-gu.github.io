import styled from '@emotion/styled'
import { renderRichText, tablet } from '../lib/utils/layout'
import { useCMSQuery, withCMSClient } from '../lib/utils/cms'
import {
  FOOTER_INDEX_QUERY,
  FOOTER_APPADEMIN_QUERY,
} from '../lib/utils/queries'
import { useRouter } from 'next/router'

const Container = styled.div`
  border-top: 2px solid black;
  position: relative;
  margin-top: 100px;
  background-color: black;
  height: 500px;

  display: flex;

  background-image: url('https://api.mapbox.com/styles/v1/sebastianait/ckeixhcr42fz519ocbrn46crk/static/pin-l+fff(11.9357634,57.7066293)/11.931968,57.706721,12.5,0,30/1000x250@2x?&access_token=pk.eyJ1Ijoic2ViYXN0aWFuYWl0IiwiYSI6ImNrZWlvaXlhMTI3dm8ycm1peHlwOW0yNGMifQ.hXGRGr7WQWwyrvMfUaNiCQ');
  background-size: cover;

  ${tablet()} {
    background-position-x: -200px;
  }
  ${tablet()} {
    height: 400px;
  }
`

const Content = styled.div`
  margin: 40px 10%;
  margin-bottom: 0;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-bottom: none;
  width: 500px;

  padding: 1em 2em;
  z-index: 2;

  color: #fff;
  background-color: rgba(17, 17, 29, 0.9);

  > h2 {
    color: #fff;
    margin: 0;
    font-size: 44px;
  }

  ${tablet()} {
    width: 100%;
  }
`

const Footer = ({ title, content }) => {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        {renderRichText(content)}
      </Content>
    </Container>
  )
}

const queryAndIdFromPath = (path) => {
  if (path === '/appademin') {
    return [FOOTER_APPADEMIN_QUERY, '1e2oEtgX80ZRIyYdbacVkO']
  }
  return [FOOTER_INDEX_QUERY, '5BaRlonhLZbVN59DVybNWF']
}

export default withCMSClient(() => {
  const router = useRouter()
  const [query, id] = queryAndIdFromPath(router.route)
  const content = useCMSQuery(query, id)

  if (!content) return null

  return (
    <Footer title={content?.footer?.title} content={content?.footer?.content} />
  )
}, false)
