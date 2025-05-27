import { atom } from 'jotai'

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

export const hoveredTagAtom = atom(null)

export const selectedTagsAtom = atom([])
