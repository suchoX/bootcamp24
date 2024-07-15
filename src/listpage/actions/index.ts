import {LIST} from '../../constants';
import {UIState} from '../../types';
import {AppDispatch, RootState} from '../../store';

// Fetch list details
export const fetchListDetails =
  () => async (dispatch: AppDispatch, state: RootState) => {
    try {
      // Set UI state to loading.
      dispatch({
        type: LIST,
        payload: {
          uiState: UIState.LOADING,
        },
      });

      const response = await fetch(
        'https://api.jsonbin.io/v3/b/60edc359a917050205c697f0',
      );
      const data = await response.json();

      // Set UI state to finished.
      dispatch({
        type: LIST,
        payload: {
          uiState: UIState.FINISHED,
          data: data.record,
        },
      });
    } catch (error) {
      // Set UI state to error.
      dispatch({
        type: LIST,
        payload: {
          uiState: UIState.ERROR,
        },
      });
    }
  };
