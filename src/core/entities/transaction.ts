import { BlockchainReference } from "./blockchain";
import { Message } from "./message";
import { Template } from "./template";

export interface Transaction {
    chainId: string,
    rpc: string,
    gasLimit: string,
    fees: string,
    messages: Message[],
    memo: string
}

export function newTransaction(template: Template, blockchain: BlockchainReference, memo: string) {
    const transaction: Transaction = {
        memo: memo,
        messages: template.messages,
        gasLimit: template.gasLimit,
        fees: template.fees,
        chainId: blockchain.chainId,
        rpc: blockchain.rpc
    }

    return transaction
}