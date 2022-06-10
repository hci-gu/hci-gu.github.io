import { useEffect } from 'react'
import { atom, selector, useRecoilState } from 'recoil'

export const availableLocales = [
  {
    name: '🇸🇪 Svenska',
    value: 'sv',
  },
  {
    name: '🇬🇧 English',
    value: 'en-US',
  },
]

const getLocaleFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('locale'))
  } catch (e) {}
  return availableLocales[0]
}

export const localeAtom = atom({
  key: 'locale',
  default: getLocaleFromLocalStorage(),
})

export const useLocale = () => {
  const [locale, setLocale] = useRecoilState(localeAtom)

  useEffect(() => {
    setLocale(getLocaleFromLocalStorage())
  }, [])

  return [
    locale,
    (updatedLocale) => {
      localStorage.setItem('locale', JSON.stringify(updatedLocale))
      setLocale(updatedLocale)
    },
  ]
}

export const contentAtom = atom({
  key: 'content',
  default: null,
})

export const projectAtom = atom({
  key: 'project',
  default: null,
})

export const textPageAtom = atom({
  key: 'text-page',
  default: null,
})

export const appademiContentAtom = atom({
  key: 'appademi-content',
  default: null,
})

const atoms = {
  project: projectAtom,
  text: textPageAtom,
  appademi: appademiContentAtom,
}

export const activePageTypeAtom = atom({
  key: 'active-page-type',
  default: null,
})

export const footerContentSelector = selector({
  key: 'footer-content',
  get: ({ get }) => {
    const content = get(contentAtom)
    const pageType = get(activePageTypeAtom)

    if (pageType) {
      const page = get(atoms[pageType])

      if (page && page.footer) return page.footer
    }
    return content && content.footer
  },
})
