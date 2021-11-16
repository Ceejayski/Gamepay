import ViewTypes from './view.types';

const addGameToViewed = (nextGameItem) => {
  const action = { type: ViewTypes.ADD_TO_VIEWS, payload: nextGameItem };
  return action;
};
export default addGameToViewed;
