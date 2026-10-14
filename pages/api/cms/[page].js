import { getCMSData } from '../../../lib/server/cms'
import { INDEX_QUERY } from '../../../lib/utils/queries'

const queryAndIDForPage = (page) => {
  switch (page) {
    case 'index':
      return [INDEX_QUERY, '5BaRlonhLZbVN59DVybNWF']
    default:
      break
  }
  return []
}

export default async function handler(req, res) {
  const { page } = req.query
  const [query, id] = queryAndIDForPage(page)

  if (!query || !id) {
    res.status(404).json({ message: 'Page not found' })
    return
  }

  const data = await getCMSData(query, id)
  return res.status(200).json(data)
}
