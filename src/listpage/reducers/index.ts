import {AnyAction} from '@reduxjs/toolkit';
import {LIST} from '../../constants';
import {UIState} from '../../types';

const initialListState = {
  uiState: UIState.LOADING,
  data: [],
};

const initialState = {
  [LIST]: initialListState,
};

const listReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        [LIST]: action.payload,
      };
    default:
      return state;
  }
};

export default listReducer;
