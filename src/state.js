import { atom, selector } from 'recoil'

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

export const localeAtom = atom({
  key: 'locale',
  default: availableLocales[0],
})

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
