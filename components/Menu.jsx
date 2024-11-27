import Link from 'next/link'
import { NativeSelect } from '@mantine/core'
import styled from '@emotion/styled'

import { availableLocales } from '../lib/state'
import Image from 'next/image'
import { isMobile, middleContent, mobile, tablet } from '../lib/utils/layout'
import { useRouter } from 'next/router'
import { useAtomValue } from 'jotai'
import { MenuOutlined } from '@ant-design/icons'

const Header = styled.div`
  /* height: 80px; */
  margin-bottom: 40px;
  padding: 16px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Links = styled.div`
  display: flex;
  ${middleContent()}

  justify-content: space-evenly;
  align-items: center;

  ${mobile()} {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: none;

  border: 1px solid rgba(0, 0, 0, 0.1);

  ${mobile()} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
  }
`

const GULogo = styled(Link)`
  ${mobile()} {
    display: none;
  }
`

const StyledLink = styled.a`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 4px 16px;
  border-radius: 32px;

  ${({ isActive }) =>
    isActive &&
    `
    font-weight: bold;
    border-color: black;
  `}

  :hover {
    background: rgba(0, 0, 0, 0.1);
    text-decoration: underline;
  }

  ${mobile()} {
    display: none;
  }
`

const routes = [
  {
    href: '/appademin',
    label: {
      en: 'Appademin',
      sv: 'Appademin',
    },
  },
  {
    href: '/education',
    label: {
      en: 'Education',
      sv: 'Utbildning',
    },
  },
  {
    href: '/projects',
    label: {
      en: 'Projects',
      sv: 'Projekt',
    },
  },
  {
    href: '/people',
    label: {
      en: 'People',
      sv: 'Team',
    },
  },
  {
    href: '/publications',
    label: {
      en: 'Publications',
      sv: 'Publikationer',
    },
  },
]

const Menu = () => {
  const router = useRouter()
  const locale = router.locale === 'sv' ? 'sv' : 'en'

  return (
    <Header>
      <>
        <GULogo href="/">
          <Image
            src="/img/gu_logo.svg"
            alt="Gothenburg university logotype"
            width={38}
            height={38}
          />
        </GULogo>
        <MobileMenu>
          <MenuOutlined />
        </MobileMenu>
      </>
      <Links>
        {routes.map((route) => (
          <StyledLink isActive={route.href === router.asPath} href={route.href}>
            {route.label[locale]}
          </StyledLink>
        ))}
      </Links>
      <div>
        <NativeSelect
          w={128}
          data={availableLocales}
          value={router.locale ?? availableLocales[0].value}
          radius="xl"
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
    </Header>
  )
}

export default Menu
