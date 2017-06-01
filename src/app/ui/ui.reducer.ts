import { Reducer, Action } from 'redux';
import { UiActions } from './ui.actions';

interface IUiReducer {
  query: string;
  activePostId: number;
}

const initialState = { query: '', activePostId: null };

export const uiReducer: Reducer<IUiReducer> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UiActions.UI.UPDATE_QUERY:
      return { ...state, query: action.payload };

    case UiActions.UI.UPDATE_ACTIVE_POST_ID:
      return { ...state, activePostId: action.payload };

    default:
      return state;
  }
}
