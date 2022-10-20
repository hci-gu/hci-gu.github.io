import Introduction from '../../components/projects/Introduction'
import Project from '../../components/projects/Project'
import { useCMSQuery, withCMSClient } from '../../lib/utils/cms'
import { PROJECT_QUERY } from '../../lib/utils/queries'

export default withCMSClient(() => {
  const content = useCMSQuery(PROJECT_QUERY, 'sw3NKWxaSum0MDkyydCp4')

  if (!content) return null

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
})
