import styled from '@emotion/styled'
import Education from '../../components/Education'
import { INDEX_QUERY } from '../../lib/utils/queries'
import { getCMSData } from '../api/cms/[page]'
import { middleContent, mobile } from '../../lib/utils/layout'

const Container = styled.div`
  font-family: 'Manrope';
  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}
`

export default function ({ content }) {
  return (
    <Container>
      <Content>
        {content.coursesCollection.items && (
          <Education
            title={content.educationTitle}
            description={content.educationDescription}
            courses={content.coursesCollection.items}
          />
        )}
      </Content>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const data = await getCMSData(
    INDEX_QUERY,
    '5BaRlonhLZbVN59DVybNWF',
    context.locale
  )

  return {
    props: {
      content: data,
    },
  }
}
