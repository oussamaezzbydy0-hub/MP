import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'fr' | 'en' | 'ar' | 'es'

type LangCtx = { lang: Lang; setLang: (l: Lang) => void }

const Ctx = createContext<LangCtx>({ lang: 'fr', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem('mp-lang') as Lang) || 'fr'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('mp-lang', l)
  }

  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
