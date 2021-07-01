import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import locationsRecuder from './locationsReducer';
import episodesReducer from './episodesReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  locations: locationsRecuder,
  episodes: episodesReducer
});

export default rootReducer;
