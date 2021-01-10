import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';
import authReducer from './authStore/authReducer';
import customBurgerReducer from './customBurgerStore/customBurgerReducer';

const composeEnhancers = composeWithDevTools({}) || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  customBurger: customBurgerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
