import Introduction from '../../components/projects/Introduction'
import Project from '../../components/projects/Project'
import { useCMSQuery, withCMSClient } from '../../lib/utils/cms'
import { PROJECT_QUERY } from '../../lib/utils/queries'

export default withCMSClient(() => {
  const content = useCMSQuery(PROJECT_QUERY, '7KTLMwpXTnYG9r2HHBUcjQ')

  if (!content) return null

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
})
