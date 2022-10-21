import { atom, useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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

// TODO update to NEXT_LOCALE cookie instead of this
export const useLocale = () => {
  const [locale, setLocale] = useAtom(localeAtom)
  const router = useRouter()

  useEffect(() => {
    router.push(
      {
        pathname: router.pathname,
      },
      undefined,
      { locale }
    )
  }, [locale])

  return [
    locale,
    (updatedLocale) => {
      localStorage.setItem('locale', JSON.stringify(updatedLocale))
      setLocale(updatedLocale)
    },
  ]
}
