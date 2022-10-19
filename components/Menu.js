import Link from 'next/link'
import { NativeSelect, Header } from '@mantine/core'
import styled from '@emotion/styled'

import { availableLocales, useLocale } from '../lib/state'
import Image from 'next/future/image'

const CustomHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    height: 100%;
  }
`

const Menu = () => {
  const [locale, setLocale] = useLocale()

  return (
    <CustomHeader height={80} mb={40} p={8}>
      <Link href="/">
        <Image
          src="/img/gu_logo.png"
          alt="Gothenburg university logotype"
          width={85}
          height={80}
        />
      </Link>
      <div>
        <NativeSelect
          data={availableLocales}
          value={locale}
          onChange={(e) => {
            setLocale(e.target.value)
          }}
        />
      </div>
    </CustomHeader>
  )
}

export default Menu
