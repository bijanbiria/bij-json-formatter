'use client'

import dynamic from 'next/dynamic'
import {useState} from 'react'
import {formatJSON, minifyJSON} from '@/utils/jsonUtils'
import ReactJson from "react-json-view";

export default function HomePage() {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [error, setError] = useState('')

    const ReactJson = dynamic(() => import('react-json-view'), { ssr: false })

    const handleFormat = () => {
        const result = formatJSON(input)
        if (result.success) {
            setOutput(result.output)
            setError('')
        } else {
            setError(result.error)
            setOutput('')
        }
    }

    const handleMinify = () => {
        const result = minifyJSON(input)
        if (result.success) {
            setOutput(result.output)
            setError('')
        } else {
            setError(result.error)
            setOutput('')
        }
    }

    const handleClear = () => {
        setInput('')
        setOutput('')
        setError('')
    }

    return (
        <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <h1 className="text-3xl font-bold mb-6">BIJ JSON Formatter</h1>

            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block font-semibold mb-2">Input JSON</label>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        rows={20}
                        className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-mono"
                        placeholder="Paste your JSON here..."
                    />
                </div>

                <div>
                    {error && (
                        <p className="mt-4 text-red-500 font-medium">⚠️ Error: {error}</p>
                    )}

                    <div className="mb-6 flex gap-4">
                        <button
                            onClick={handleFormat}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                        >
                            Format
                        </button>
                        <button
                            onClick={handleMinify}
                            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
                        >
                            Minify
                        </button>
                        <button
                            onClick={handleClear}
                            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                <div>
                    <label className="block font-semibold mb-2">Output</label>
                    {output ? (
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-2">Formatted JSON Preview</h2>
                            <ReactJson
                                src={JSON.parse(output)}
                                name={null}
                                collapsed={1}
                                enableClipboard={true}
                                displayDataTypes={true}
                                displayObjectSize={true}
                                theme="monokai"
                                style={{ fontSize: '14px', borderRadius: '8px', padding: '1rem', overflow: 'scroll' }}
                            />
                        </div>
                    ) : (
                        <textarea
                            value={output}
                            readOnly
                            rows={20}
                            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm font-mono"
                            placeholder="Formatted JSON will appear here..."
                        />
                    )}

                </div>
            </div>
        </main>
    )
}