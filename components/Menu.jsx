import Link from 'next/link'
import { NativeSelect } from '@mantine/core'
import styled from '@emotion/styled'

import { availableLocales } from '../lib/state'
import Image from 'next/image'
import { middleContent } from '../lib/utils/layout'
import { useRouter } from 'next/router'

const Header = styled.div`
  height: 80px;
  margin-bottom: 40px;
  padding: 16px;
  background: transparent;
  > div {
    ${middleContent()}
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      height: 100%;
    }
  }
`

const Menu = () => {
  const router = useRouter()

  return (
    <Header>
      <div>
        <Link href="/">
          <Image
            src="/img/gu_logo.png"
            alt="Gothenburg university logotype"
            width={108}
            height={80}
          />
        </Link>
        <div>
          <NativeSelect
            data={availableLocales}
            value={router.locale ?? availableLocales[0].value}
            onChange={(e) => {
              router.push(
                {
                  pathname: router.pathname,
                },
                undefined,
                { locale: e.target.value }
              )
            }}
          />
        </div>
      </div>
    </Header>
  )
}

export default Menu
