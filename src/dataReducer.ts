import { Action, State } from './types';

const dataReduce = (state: State, action: Action): State => {
  switch (action.type) {
    case 'request':
      return { status: 'empty', data: [], error: null };
    case 'loading':
      return {
        status: 'loading',
        data: [],
        error: action.error,
      };
    case 'success':
      return {
        status: 'success',
        data: action.payload,
        error: null,
      };
    case 'failure':
      return { status: 'error', error: action.error, data: [] };

    default:
      return state;
  }
};

export default dataReduce;
