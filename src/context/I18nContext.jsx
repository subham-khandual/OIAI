import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { or } from '../i18n/or'

const dictionaries = { en: {}, or }
const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t: (key) => dictionaries[lang]?.[key] ?? key }),
    [lang],
  )
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
