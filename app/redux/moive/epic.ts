// import {$axios} from '../../configs/api';
import {movieActions, types} from './action';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';

export const getAllMovie = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_MOVIE),
    mergeMap((act: any) => {
      return axios
        .get(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
        )
        .then((rs: any) => {
          const {data} = rs;

          return movieActions.getAllMovieSuccess(data);
        })
        .catch((err: any) => {
          return movieActions.getAllMovieFailure(err);
        });
    }),
  );
};

export const getAllCast = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_CAST),
    mergeMap((act: any) => {
      return axios
        .get(
          `https://api.themoviedb.org/3/movie/${act.payload.id}/credits?api_key=2c4916f2a93252ac7140372c475509c6&language=en-US`,
        )
        .then((rs: any) => {
          const {data} = rs;
          return movieActions.getAllCastSuccess(data);
        })
        .catch((err: any) => {
          return movieActions.getAllCastFailure(err);
        });
    }),
  );
};

export const getAllMovieYear = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_MOVIE_YEAR),
    mergeMap((act: any) => {
      return axios
        .get(
          `http://api.themoviedb.org/3/discover/movie?api_key=2c4916f2a93252ac7140372c475509c6&primary_release_year=${
            act?.payload || 2021
          }&sort_by=revenue.desc&page=1`,
        )
        .then((rs: any) => {
          const {data} = rs;
          return movieActions.getAllMovieYearSuccess(data);
        })
        .catch((err: any) => {
          return movieActions.getAllMovieYearFailure(err);
        });
    }),
  );
};
export const getAllMovieHot = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_MOVIE_HOT),
    mergeMap((act: any) => {
      return axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=2c4916f2a93252ac7140372c475509c6&with_genres=${act.payload}`,
        )
        .then((rs: any) => {
          const {data} = rs;
          return movieActions.getAllMovieHotSuccess(data);
        })
        .catch((err: any) => {
          return movieActions.getAllMovieHotFailure(err);
        });
    }),
  );
};
export const getAllMovieType = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_MOVIE_TYPE),
    mergeMap((act: any) => {
      console.log('act MovieType', act);
      return axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=2c4916f2a93252ac7140372c475509c6&language=en-US`,
        )
        .then((rs: any) => {
          const {data} = rs;
          console.log('GET ALL MOVIE TYPE', data);
          return movieActions.getAllMovieTypeSuccess(data);
        })
        .catch((err: any) => {
          return movieActions.getAllMovieTypeFailure(err);
        });
    }),
  );
};
