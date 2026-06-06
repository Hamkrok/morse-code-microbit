//% color="#008080" icon="\uf141" block="Morse Code"
namespace morse {
    let currentCode = ""
    let lastInputTime = 0

    const alphabet: string[] = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
        ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", 
        "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."
    ]

    //% block="add dot"
    export function addDot() {
        currentCode += "."
        lastInputTime = control.millis()
    }

    //% block="add dash"
    export function addDash() {
        currentCode += "-"
        lastInputTime = control.millis()
    }

    //% block="has untranslated code"
    export function hasCode(): boolean {
        return currentCode.length > 0
    }

    //% block="time since last input"
    export function timeSinceLastPress(): number {
        return control.millis() - lastInputTime
    }

    //% block="translate morse code"
    export function translate(): string {
        if (currentCode == "") return ""
        let index = alphabet.indexOf(currentCode)
        currentCode = "" // Reset for the next letter
        if (index >= 0) {
            return String.fromCharCode(65 + index) 
        }
        return "?" 
    }
}
