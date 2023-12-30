import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
} from '@reduxjs/toolkit';
import cakesReducer from '@/features/cakes/cakesSlice';
import piesReducer from '@/features/pies/piesSlice';

const rootReducer = combineReducers({
    cakes: cakesReducer,
    pies: piesReducer,
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
