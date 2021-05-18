export const config = {
  MOVIE_URL: ' https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
  MOVIEVIDEO_URL: 'https://api.themoviedb.org/3/movie/209112/trailers?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
  IMAGE_URL: 'https://image.tmdb.org/t/p/w500',
};


export function getImageURL(filename:any) {
	return config.IMAGE_URL + filename;
}




