import { Reducer, Action } from 'redux';
import { UiActions } from './ui.actions';

interface IUiReducer {
  query: string;
}

const initialState = { query: '' };

export const uiReducer: Reducer<IUiReducer> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UiActions.UI.UPDATE_QUERY:
      return { ...state, query: action.payload };

    default:
      return state;
  }
}
