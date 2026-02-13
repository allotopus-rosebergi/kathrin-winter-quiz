import { useState } from "react"

function InputTest() {
    const [inputValue, setInputValue] = useState("")
    const [showCode, setShowCode] = useState(false)
    const [error, setError] = useState("")

    const CORRECT_INPUT = "inaeternum"
    const STATIC_OUTPUT_CODE = "4252"

    function handleSubmit(e) {
        e.preventDefault()

        setError("")
        setShowCode(false)

        // const isValidFormat = /^\d{8}$/.test(inputValue)
        //
        // if (!isValidFormat) {
        //     setError("Des san koane 8 Zahlen du Hund")
        //     return
        // }

        if (inputValue === CORRECT_INPUT) {
            setShowCode(true)
        } else {
            setError("Haha, des woa nix")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-900">
            <div className="bg-zinc-800 p-8 rounded-2xl shadow-xl w-80">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <input
                        type="text"
                        placeholder="Gib dein Code ei"
                        value={inputValue}
                        maxLength={10}
                        onChange={(e) => {
                            const value = e.target.value
                            setInputValue(value)
                        }}
                        className="px-4 py-2 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 transition-colors text-white py-2 rounded-lg font-medium"
                    >
                        Schau ma moi
                    </button>

                </form>

                {showCode && (
                    <p className="text-green-400 mt-4 text-center font-bold text-lg">
                        Code: {STATIC_OUTPUT_CODE}
                    </p>
                )}

                {error && (
                    <p className="text-red-400 mt-4 text-center">
                        {error}
                    </p>
                )}
            </div>
        </div>
    )
}

export default InputTest;