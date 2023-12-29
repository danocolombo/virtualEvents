// cakesThunks.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount, getDefaultValue } from './cakesAPI';
import { OrderType, CustomerType } from '@/types';

// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementCakesAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementCakesAsync = createAsyncThunk(
    'cakes/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const resetCakesInventory = createAsyncThunk(
    'cakes/getDefaultValue',
    async (amount: number) => {
        const response = await getDefaultValue();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
/*
    orderCake is called with dispatch from function component, passing
    in a OrderType.

    cakes/completeOrder are referencing 'cakes' which is the slice name
    and 'completeOrder is the name for the passed in value.

    The function can do whatever it needs to do, but the return value 
    is passed to the extraReducer in the slice as action.payload.
    
*/
export const orderCake = createAsyncThunk(
    'cakes/completeOrder',
    async (completeOrder: OrderType) => {
        const orderId = Math.random().toString();
        const newOrder = {
            id: orderId,
            customer: completeOrder.customer.firstName,
            item: completeOrder.name,
        };
        console.log('THUNK order:\n', newOrder);
        return newOrder;
    }
);
