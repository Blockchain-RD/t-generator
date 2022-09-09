import { Message } from "./message";

export interface Template {
    name: string,
    gasLimit: string,
    fees: string,
    messages: Message[],
    isMultisig: boolean
}

export function newTemplate(name: string, gasLimit: string, fees: string, messages: Message[], isMultisig: boolean) {
    return {
        name: name,
        gasLimit: gasLimit,
        fees: fees,
        messages: messages,
        isMultisig: isMultisig
    }
}