export interface BlockchainReference {
    chainId: string
    rpc: string
}

export function isValidBlockchainReference(reference: BlockchainReference): boolean {
    return true
}

export function isAvailableBlockchainConnection(reference: BlockchainReference): boolean {
    return true
}

export function newBlockchainReference(chainId: string, rpc: string): BlockchainReference {
    const reference: BlockchainReference = {
        chainId: chainId,
        rpc: rpc
    }

    isValidBlockchainReference(reference)

    return reference
}