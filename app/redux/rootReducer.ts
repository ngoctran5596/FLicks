
import { combineReducers } from 'redux';
import {reducerTrailer} from './trailer/reducer';
import movie from './moive/reducer'
import { from } from 'rxjs';

export default combineReducers({
  trailer: reducerTrailer,
  movie: movie
});
