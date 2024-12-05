import Head from 'next/head'
import styled from '@emotion/styled'
import { INDEX_QUERY, PROJECTS_QUERY } from '../lib/utils/queries'
import {
  mobile,
  middleContent,
  renderRichText,
  tablet,
  smallLaptop,
} from '../lib/utils/layout'
import ProjectShowcase from '../components/ProjectShowcase'
import { getCMSData } from './api/cms/[page]'
import ProjectGrid from '../components/ProjectGrid'
import { Masonry } from 'react-plock'

const Container = styled.div`
  font-family: 'Manrope';
  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}
`

const Title = styled.div`
  grid-column: 1 / -1;
  max-width: 1400px;
  font-size: 32px;
  line-height: 80px;
  text-align: center;

  font-weight: 900;
  color: #22223b;

  > h1 {
    font-weight: 900;
    font-size: 4.5rem;
    margin: 0;
    padding: 0;
  }

  ${mobile()} {
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }
`

const Description = styled.div`
  padding: 8px;

  > div {
    color: rgb(25, 25, 25);
    text-align: justify;
  }

  ${smallLaptop()} {
    width: 100%;
  }
`

const LongDescription = styled.div`
  ${mobile()} {
    display: none;
  }
`

const ShortDescription = styled.div`
  display: none;

  ${mobile()} {
    display: block;
  }
`

const MobilePromoContainer = styled.div`
  position: relative;
  display: none;
  width: 100%;

  ${mobile()} {
    display: flex;
  }

  > img {
    width: 150px;
    margin: 0 auto;
  }
`

const ImageBackground = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;

  > div {
    position: absolute;
    z-index: -1;
    bottom: -50vw;
    left: calc(50% - 37.5vw);
    width: 75vw;
    height: 75vw;
    border-radius: 50%;
    background-color: #96e2e6;
  }
`

const FullWidthBorder = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  border-bottom: 1px solid black;
`

const MobilePromo = () => {
  return (
    <MobilePromoContainer>
      <img
        src="/img/assets/landing-promo-mobile.png"
        alt="phone with WFH Movement app screenshot"
      ></img>
      <ImageBackground>
        <div></div>
      </ImageBackground>
      <FullWidthBorder />
    </MobilePromoContainer>
  )
}

const Index = ({ content }) => {
  console.log(content)
  const projects = [{ intro: '' }, ...content.projects]

  return (
    <>
      <Head>
        <title>Division of Human-Computer Interaction</title>
        <meta name="title" content="Division of Human-Computer Interaction" />
        <meta
          name="description"
          content="Division of Human-Computer Interaction at Gothenburg University"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="hci-gu.github.io" />
        <meta
          property="og:title"
          content="Division of Human-Computer Interaction"
        />
        <meta
          property="og:description"
          content="Division of Human-Computer Interaction at Gothenburg University"
        />
        <meta
          property="og:image"
          content="https://hci-gu.github.io/img/share.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://hci-gu.github.io/wfh-movement/"
        />
        <meta property="twitter:title" content="WFH movement" />
        <meta
          property="twitter:description"
          content="Compare your movement patterns before and after working from home."
        />
        <meta
          property="twitter:image"
          content="https://hci-gu.github.io/img/wfh-movement/share.png"
        />
      </Head>
      <Container>
        <Content>
          {content.projects && content.projects.length && (
            <Masonry
              items={projects}
              config={{
                columns: [1, 2, 3],
                gap: [24, 12, 24],
                media: [640, 768, 1024],
              }}
              render={(project, idx) => {
                const index = projects.indexOf(project)
                if (index === 0) {
                  return (
                    <div key={idx}>
                      <Title>
                        <h1>HCI@GU</h1>
                      </Title>
                      <Description>
                        <LongDescription>
                          {renderRichText(content.shortIntroduction)}
                        </LongDescription>
                        <ShortDescription>
                          {renderRichText(content.shortIntroduction)}
                        </ShortDescription>
                      </Description>
                    </div>
                  )
                }
                return <ProjectShowcase {...project} key={idx} />
              }}
            />
          )}
        </Content>
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const data = await getCMSData(
    INDEX_QUERY,
    '5BaRlonhLZbVN59DVybNWF',
    context.locale
  )
  const projects = await getCMSData(PROJECTS_QUERY, context.locale)

  return {
    props: {
      content: {
        ...data,
        projects: projects.items,
      },
    },
  }
}

export default Index
