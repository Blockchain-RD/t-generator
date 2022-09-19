import { Message } from "../message";

export interface Template {
    name: string,
    gasLimit: string,
    fees: string,
    messages: Message[],
    isMultisig: boolean
}

export function isValidTemplate(template: Template): boolean {
    return true
}

export function newTemplate(name: string, gasLimit: string, fees: string, messages: Message[], isMultisig: boolean) {
    const template: Template = {
        name: name,
        gasLimit: gasLimit,
        fees: fees,
        messages: messages,
        isMultisig: isMultisig
    }

    isValidTemplate(template)

    return template
}

export function importTemplate(json: string): Template {
    return JSON.parse(json)
}

export function exportTemplate(template: Template): string {
    return JSON.stringify(template)
}