// cakesThunks.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactions } from './transactionsAPI';
import { TransactionType } from '@/types';

// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementCakesAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const loadTransactionsAsync = createAsyncThunk(
    'transactions/getTransactions',
    async (accountId: string) => {
        //todo ******************************************
        //todo  need to provider API call for real data
        //todo ******************************************

        return [];
    }
);
export const loadTransactionsAsyncLocal = createAsyncThunk(
    'transactions/getTransactions',
    async (accountId: string) => {
        const response: { data: TransactionType[] } = await getTransactions();
        // The value we return becomes the `fulfilled` action payload
        const filteredTransactions = response.data.filter(
            (t) => t.accountId === accountId
        );
        return filteredTransactions;
    }
);
