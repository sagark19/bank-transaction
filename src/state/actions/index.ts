import { ActionType } from '../action-types/index'
interface DepostitAction {
    type: ActionType.DEPOSIT
    payload:number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload:number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

export type Action =  WithdrawAction | BankruptAction | DepostitAction