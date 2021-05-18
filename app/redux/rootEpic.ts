import {combineEpics} from 'redux-observable';
import {getAllTrailer, getAllTrailerOfMovie} from './trailer/epic';
import {
  getAllMovie,
  getAllCast,
  getAllMovieYear,
  getAllMovieHot,
  getAllMovieType
} from './moive/epic';
export const rootEpic = combineEpics(
  getAllTrailer,
  getAllMovie,
  getAllCast,
  getAllMovieYear,
  getAllTrailerOfMovie,
  getAllMovieHot,
  getAllMovieType
);
// export default rootEpic;
