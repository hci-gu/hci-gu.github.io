import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Select } from 'antd'
import { mobile, middleContent } from '../utils/layout'
import { useRecoilState } from 'recoil'
import { availableLocales, localeAtom } from '../state'

const MENU_HEIGHT = 64

const Container = styled.div`
  height: ${MENU_HEIGHT * 2}px;

  ${mobile()} {
    height: ${MENU_HEIGHT}px;
    padding: 0 20px;
  }

  margin-bottom: 10px;
`

const Content = styled.div`
  ${middleContent({ padding: false })}
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  line-height: ${MENU_HEIGHT}px;
`

const Logo = styled.div`
  width: ${MENU_HEIGHT * 2}px;
  height: ${MENU_HEIGHT * 2}px;

  > img {
    height: 100%;
    padding: 20px 0;
  }

  ${mobile()} {
    width: ${MENU_HEIGHT * 1.5}px;
    height: ${MENU_HEIGHT * 1.5}px;
  }
`

const Menu = ({ links = true }) => {
  const [locale, setLocale] = useRecoilState(localeAtom)
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo>
            <img
              src="/img/gu_logo.png"
              alt="Gothenburg university logotype"
            ></img>
          </Logo>
        </Link>
        <div>
          <Select
            defaultValue={locale.value}
            onChange={(val) =>
              setLocale(availableLocales.find((locale) => locale.value === val))
            }
          >
            {availableLocales.map(({ name, value }) => (
              <Select.Option value={value} key={`Locale_${value}`}>
                <span>
                  {name.split(' ').map((s, i) => (
                    <span
                      style={{ paddingRight: i == 0 ? 10 : 0 }}
                      key={`${s}_i`}
                    >
                      {s}
                    </span>
                  ))}
                </span>
              </Select.Option>
            ))}
          </Select>
        </div>
      </Content>
    </Container>
  )
}

export default Menu
