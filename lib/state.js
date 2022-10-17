import { atom, useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect, useLayoutEffect } from 'react'

export const availableLocales = [
  {
    label: '🇸🇪 Svenska',
    value: 'sv',
  },
  {
    label: '🇬🇧 English',
    value: 'en-US',
  },
]

const getLocaleFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('locale')) ?? availableLocales[0]
  } catch (e) {}
  return availableLocales[0]
}

export const localeAtom = atom(getLocaleFromLocalStorage())

export const useLocale = () => {
  const [locale, setLocale] = useAtom(localeAtom)
  const router = useRouter()

  useEffect(() => {
    // set query to locale
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        locale,
      },
    })
  }, [locale])

  return [
    locale,
    (updatedLocale) => {
      localStorage.setItem('locale', JSON.stringify(updatedLocale))
      setLocale(updatedLocale)
    },
  ]
}
