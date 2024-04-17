'use client'

import { useEffect, useState } from "react"
import Prism from "prismjs"
import 'prismjs/themes/prism.css'

const LANGUAGES = ['html', 'javascript', 'css']
export type Language = typeof LANGUAGES[number]

const CODE_EXAMPLE = `
const resultArr = strArr.filter((val, i) => {
    if (i % 2 === 0) return String(val).trimStart()
})

console.log('Next two :', resultArr[2], resultArr[3])`

export const CodeReader = () => {
    const [text, setText] = useState<string>(CODE_EXAMPLE)
    const [language, setLanguage] = useState<Language>('javascript')

    useEffect(() => {
        Prism.highlightAll()
    }, [text, language])

    return (
        <div className="w-2/4 h-3/4">
            <div className="flex justify-end pb-2">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    {LANGUAGES.map((lang) => (<option value={lang}>{lang}</option>))}
                </select>
            </div>
            <div className="relative h-1/2">
                <textarea
                    className="w-full h-fit"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="relative h-1/2">
                <pre className={`h-full language-${language}`}>
                    <code className={`language-${language}`}>
                        {text}
                    </code>
                </pre>

            </div>
        </div>
    )
}