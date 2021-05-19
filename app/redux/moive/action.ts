export const types = {
    GET_ALL_MOVIE : 'GET_ALL_MOVIE',
    GET_ALL_MOVIE_SUCCESS : 'GET_ALL_MOVIE_SUCCESS',
    GET_ALL_MOVIE_FAILURE : 'GET_ALL_MOVIE_FAILURE',
    GET_ALL_CAST : 'GET_ALL_CAST',
    GET_ALL_CAST_SUCCESS : 'GET_ALL_CAST_SUCCESS',
    GET_ALL_CAST_FAILURE : 'GET_ALL_CAST_FAILURE',
    GET_ALL_MOVIE_YEAR : 'GET_ALL_MOVIE_YEAR',
    GET_ALL_MOVIE_YEAR_SUCCESS : 'GET_ALL_MOVIE_YEAR_SUCCESS',
    GET_ALL_MOVIE_YEAR_FAILURE : 'GET_ALL_MOVIE_YEAR_FAILURE',
    GET_ALL_MOVIE_HOT : 'GET_ALL_MOVIE_HOT',
    GET_ALL_MOVIE_HOT_SUCCESS : 'GET_ALL_MOVIE_HOT_SUCCESS',
    GET_ALL_MOVIE_HOT_FAILURE : 'GET_ALL_MOVIE_HOT_FAILURE',
    GET_ALL_MOVIE_TYPE : 'GET_ALL_MOVIE_TYPE',
    GET_ALL_MOVIE_TYPE_SUCCESS : 'GET_ALL_MOVIE_TYPE_SUCCESS',
    GET_ALL_MOVIE_TYPE_FAILURE : 'GET_ALL_MOVIE_TYPE_FAILURE',

}

const action = (type:string,payload:any)=>({type,payload});

export const movieActions ={
    getAllMovie : (payload:any)=>action(types.GET_ALL_MOVIE,payload),
    getAllMovieSuccess: (payload:any)=>action(types.GET_ALL_MOVIE_SUCCESS,payload),
    getAllMovieFailure: (payload:any)=> action(types.GET_ALL_MOVIE_FAILURE,payload),
    getAllCast: (payload:any)=> action(types.GET_ALL_CAST,payload),
    getAllCastSuccess: (payload:any)=> action(types.GET_ALL_CAST_SUCCESS,payload),
    getAllCastFailure: (payload:any)=> action(types.GET_ALL_CAST_FAILURE,payload),
    getAllMovieYear: (payload:any)=> action(types.GET_ALL_MOVIE_YEAR,payload),
    getAllMovieYearSuccess: (payload:any)=> action(types.GET_ALL_MOVIE_YEAR_SUCCESS,payload),
    getAllMovieYearFailure: (payload:any)=> action(types.GET_ALL_MOVIE_YEAR_FAILURE,payload),
    getAllMovieHot: (payload:any)=> action(types.GET_ALL_MOVIE_HOT,payload),
    getAllMovieHotSuccess: (payload:any)=> action(types.GET_ALL_MOVIE_HOT_SUCCESS,payload),
    getAllMovieHotFailure: (payload:any)=> action(types.GET_ALL_MOVIE_HOT_FAILURE,payload),
    getAllMovieType: (payload:any)=> action(types.GET_ALL_MOVIE_TYPE,payload),
    getAllMovieTypeSuccess: (payload:any)=> action(types.GET_ALL_MOVIE_TYPE_SUCCESS,payload),
    getAllMovieTypeFailure: (payload:any)=> action(types.GET_ALL_MOVIE_TYPE_FAILURE,payload),
}