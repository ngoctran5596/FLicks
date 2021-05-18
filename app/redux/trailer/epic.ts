// import {$axios} from '../../configs/api';
import {
  trailerAction,
  types,
} from './action';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';

export const getAllTrailer = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_TRAILER),
    mergeMap((act: any) => {
      console.log('act', act);
      return axios
        .get(
          'https://api.themoviedb.org/3/movie/209112/trailers?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
        )
        .then((rs: any) => {
          const {data} = rs;
          console.log('getAllTraller', data);
          return trailerAction.getALLTrallersSuccess(data);
        })
        .catch((err: any) => {
          return trailerAction.getALLTrallersFail(err);
        });
    }),
  );
};

export const getAllTrailerOfMovie=($action:any)=>{
return $action.pipe(
  ofType(types.GET_ALL_TRAILER_OF_MOIVE),
  mergeMap((act:any)=>{
    console.log('act of movie trai ler', act);
    return axios.get(
      `https://api.themoviedb.org/3/movie/${act.payload}/trailers?api_key=2c4916f2a93252ac7140372c475509c6`
    ).then((rs: any) => {
      const {data} = rs;
      console.log('getAllTrallerOFMOVIE', data);
      return trailerAction.getALLTrailersOfMovieSuccess(data);
    })
    .catch((err: any) => {
      return trailerAction.getALLTrailersOfMovieFail(err);
    });
  })
)

}
