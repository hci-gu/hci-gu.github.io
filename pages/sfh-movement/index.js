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
          introScreenshot="/img/sfh-movement/screenshot_intro.png"
          screenshot="/img/sfh-movement/screenshot.png"
          appstore="https://apps.apple.com/us/app/id1556414814"
          googlePlay="https://play.google.com/store/apps/details?id=com.wfhmovement.app.sfh"
        />
      )}
    />
  )
}

export async function getStaticProps(context) {
  return getCMSPageProps(context, PROJECT_QUERY, 'sw3NKWxaSum0MDkyydCp4')
}
