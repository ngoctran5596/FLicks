import {types} from './action';
const initState = {
  allTraller: [],
  allTrailerOfMovie: [],
};
export const reducerTrailer = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_TRAILER: {
      console.log('GET_ALL_TRALLER');
      return {...state, allTraller: []};
    }
    case types.GET_ALL_TRAILER_SUCCESS: {
      return {...state, allTraller: payload};
    }
    case types.GET_ALL_TRAILER_FAILURE: {
      return {...state, allTraller: payload};
    }
    case types.GET_ALL_TRAILER_OF_MOIVE: {
      return {...state, allTrailerOfMovie: []};
    }
    case types.GET_ALL_TRAILER_OF_MOVIE_SUCCESS: {
      return {...state, allTrailerOfMovie: payload};
    }
    case types.GET_ALL_TRAILER_OF_MOVIE_FAILURE: {
      return {...state, allTrailerOfMovie: payload};
    }
  }
  return state;
};
