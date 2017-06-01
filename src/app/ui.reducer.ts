import { Reducer, Action } from 'redux';

interface IUiReducer {
  query: string;
}

const initialState = { query: '' };

export const uiReducer: Reducer<IUiReducer> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
}
