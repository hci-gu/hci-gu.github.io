import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Select } from 'antd'
import { mobile, middleContent } from '../utils/layout'
import { availableLocales, useLocale } from '../state'

const MENU_HEIGHT = 64
const Container = styled.div`
  height: ${MENU_HEIGHT * 2}px;

  ${mobile()} {
    height: ${MENU_HEIGHT}px;
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

    ${mobile()} {
      width: 54px;
      height: auto;
    }
  }

  ${mobile()} {
    width: ${MENU_HEIGHT * 1.5}px;
    height: ${MENU_HEIGHT * 1.5}px;
  }

  ${mobile()} {
    height: 50%;
  }
`

const showLanguagePickerForPath = (pathname) => {
  const path = pathname.split('/').join('')
  switch (path) {
    default:
      return true
  }
}

const Menu = () => {
  const [locale, setLocale] = useLocale()

  const location = useLocation()

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
        {showLanguagePickerForPath(location.pathname) && (
          <div>
            <Select
              size="small"
              defaultValue={locale ? locale.value : ''}
              onChange={(val) =>
                setLocale(
                  availableLocales.find(
                    (locale) => locale && locale.value === val
                  )
                )
              }
            >
              {availableLocales.map(({ name, value }) => (
                <Select.Option value={value} key={`Locale_${value}`}>
                  <span>
                    {name.split(' ').map((s, i) => (
                      <span
                        style={{ paddingRight: i === 0 ? 10 : 0 }}
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
        )}
      </Content>
    </Container>
  )
}

export default Menu
