export interface Message {
    typeUrl: string,
    value: object
}

export function isValidMessage(message: Message): boolean {
    return true
}

export function newMessage(type: string, value: object) {
    const message: Message = {
        typeUrl: type,
        value: value 
    }

    isValidMessage(message)

    return message
}