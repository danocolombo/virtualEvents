import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
} from '@reduxjs/toolkit';
import cakesReducer from '@/features/cakes/cakesSlice';
import piesReducer from '@/features/pies/piesSlice';
import transactionsReducer from '@/features/transactions/transactionsSlice';

const rootReducer = combineReducers({
    cakes: cakesReducer,
    pies: piesReducer,
    transactions: transactionsReducer,
});
export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
