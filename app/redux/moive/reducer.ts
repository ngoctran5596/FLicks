import {types} from './action';
const initialState = {
  allmovie: [],
  allCast: [],
  allmovieHot: [],
  allmovieType: [],
};

const getAllMovie = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_MOVIE:
      return {
        ...state,
        allmovie: [],
      };

    case types.GET_ALL_MOVIE_SUCCESS:
      return {
        ...state,
        allmovie: payload,
      };
    case types.GET_ALL_MOVIE_FAILURE:
      return {
        ...state,
        allmovie: payload,
      };
    case types.GET_ALL_CAST:
      return {
        ...state,
        allCast: [],
      };
    case types.GET_ALL_CAST_SUCCESS:
      return {
        ...state,
        allCast: payload,
      };
    case types.GET_ALL_CAST_FAILURE:
      return {
        ...state,
        allCast: payload,
      };
    case types.GET_ALL_MOVIE_YEAR:
      return {
        ...state,
        allmovie: [],
      };
    case types.GET_ALL_MOVIE_YEAR_SUCCESS:
      return {
        ...state,
        allmovie: payload,
      };
    case types.GET_ALL_MOVIE_YEAR_FAILURE:
      return {
        ...state,
        allmovie: payload,
      };
    case types.GET_ALL_MOVIE_HOT:
      return {
        ...state,
        allmovieHot: [],
      };
    case types.GET_ALL_MOVIE_HOT_SUCCESS:
      return {
        ...state,
        allmovieHot: payload,
      };
    case types.GET_ALL_MOVIE_HOT_FAILURE:
      return {
        ...state,
        allmovieHot: payload,
      };

    case types.GET_ALL_MOVIE_TYPE:
      return {
        ...state,
        allmovieType: [],
      };
    case types.GET_ALL_MOVIE_TYPE_SUCCESS:
      return {
        ...state,
        allmovieType: payload,
      };
    case types.GET_ALL_MOVIE_TYPE_SUCCESS:
      return {
        ...state,
        allmovieType: payload,
      };

    default:
      return state;
  }
};
export default getAllMovie;
