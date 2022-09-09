export interface BlockchainReference {
    chainId: string
    rpc: string
}

export function newBlockchainReference(chainId: string, rpc: string) {
    return {
        chainId: chainId,
        rpc: rpc
    } as BlockchainReference
}