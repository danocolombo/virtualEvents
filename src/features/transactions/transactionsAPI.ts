// A mock function to mimic making an async request for data
import fileData from '@assets/data/trans.json';
import { TransactionType } from '@/types';
const transactions: TransactionType[] = fileData;

export function getDefaultValue() {
    return new Promise<{ data: TransactionType[] }>((resolve) =>
        setTimeout(() => resolve({ data: [] }), 500)
    );
}
export function getTransactions() {
    return new Promise<{ data: TransactionType[] }>((resolve) =>
        setTimeout(() => resolve({ data: transactions }), 500)
    );
}
