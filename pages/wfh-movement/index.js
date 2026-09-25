import Introduction from '../../components/projects/Introduction'
import Project from '../../components/projects/Project'
import { getCMSPageProps } from '../../lib/server/cms'
import { PROJECT_QUERY } from '../../lib/utils/queries'

export default function Page({ content }) {
  return (
    <Project
      project={content}
      intro={() => (
        <Introduction
          {...content}
          introScreenshot="/img/wfh-movement/screenshot_intro.png"
          screenshot="/img/wfh-movement/screenshot.png"
          appstore="https://apps.apple.com/us/app/id1518224904"
        />
      )}
    />
  )
}

export async function getStaticProps(context) {
  return getCMSPageProps(context, PROJECT_QUERY, '7KTLMwpXTnYG9r2HHBUcjQ')
}
