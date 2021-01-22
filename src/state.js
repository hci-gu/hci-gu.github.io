import { atom } from 'recoil'

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
