export function formatJSON(input: string): { success: true, output: string } | { success: false, error: string } {
    try {
        const obj = JSON.parse(input)
        return {success: true, output: JSON.stringify(obj, null, 2)}
    } catch (e: unknown) {
        if (e instanceof Error) {
            return {success: false, error: e.message}
        }
        return {success: false, error: 'Unknown error'}
    }
}

export function minifyJSON(input: string): { success: true, output: string } | { success: false, error: string } {
    try {
        const obj = JSON.parse(input)
        return {success: true, output: JSON.stringify(obj)}
    } catch (e: unknown) {
        if (e instanceof Error) {
            return {success: false, error: e.message}
        }
        return {success: false, error: 'Unknown error'}
    }
}