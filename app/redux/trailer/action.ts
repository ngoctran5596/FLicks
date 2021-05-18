export const types = {
  GET_ALL_TRAILER: 'GET_ALL_TRAILER',
  GET_ALL_TRAILER_SUCCESS: 'GET_ALL_TRAILER_SUCCESS',
  GET_ALL_TRAILER_FAILURE: 'GET_ALL_TRAILER_FAILURE',
  GET_ALL_TRAILER_OF_MOIVE: 'GET_ALL_TRAILER_OF_MOIVE',
  GET_ALL_TRAILER_OF_MOVIE_SUCCESS: 'OF_MOVIE_',
  GET_ALL_TRAILER_OF_MOVIE_FAILURE: 'GET_ALL_TRAILER_OF_MOVIE_FAILURE',
};

const action = (type: string, payload?: any) => ({type, payload});

export const trailerAction = {
  getALLTrallers: (payLoad: any) => action(types.GET_ALL_TRAILER, payLoad),
  getALLTrallersSuccess: (payload: any) =>
    action(types.GET_ALL_TRAILER_SUCCESS, payload),
  getALLTrallersFail: (payload: any) =>
    action(types.GET_ALL_TRAILER_FAILURE, payload),
  getALLTrailersOfMovie: (payload: any) =>
    action(types.GET_ALL_TRAILER_OF_MOIVE, payload),
  getALLTrailersOfMovieFail: (payload: any) =>
    action(types.GET_ALL_TRAILER_OF_MOVIE_SUCCESS, payload),
  getALLTrailersOfMovieSuccess: (payload: any) =>
    action(types.GET_ALL_TRAILER_OF_MOVIE_FAILURE, payload),
};
