import ViewTypes from './view.types';
import handleAddtoView from './view.utils';

const INITIAL_STATE = {
  viewedGames: [],
};

const ViewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ViewTypes.ADD_TO_VIEWS:
      console.log(state.viewedGames);
      return {
        ...state,
        viewedGames: handleAddtoView({
          prevGameItems: state.viewedGames,
          nextGameItem: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default ViewReducer;
