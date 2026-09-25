import Error from 'next/error'
import { getFooter, REVALIDATE_SECONDS } from '../lib/server/cms'

export default function NotFound() {
  return <Error statusCode={404} />
}

export async function getStaticProps(context) {
  return {
    props: { footer: await getFooter(context.locale) },
    revalidate: REVALIDATE_SECONDS,
  }
}
