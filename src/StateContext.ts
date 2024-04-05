import { Dispatch, createContext } from 'react';
import { Action, TResults } from './types';

export const stateContext = createContext<TResults[] | undefined>([]);
export const stateDispatchContext = createContext<Dispatch<Action>>(() => null);
