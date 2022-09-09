export interface Message {
    typeUrl: string,
    value: object
}

export function newMessage(type: string, value: object) {
    return {
        typeUrl: type,
        value: value 
    } as Message
}