import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ItemMovieDetail from '../../../component/Movie/ItemMovieDetail';
import {movieActions} from '../../../redux/moive/action';
import {trailerAction} from '../../../redux/trailer/action';

const MovieDetail = (props: any) => {
  const dispatch = useDispatch();
  const [idProps, setIdProps] = useState(props.route.params.id);
  // const idMovie = ;

  //lấy ra all diễn viên
  const dataCast = useSelector((state: any) => {
    return state.movie.allCast.cast;
  });
  //action lấy ra all diễn viên chuyền vào id của movie
  const dispactchCast = () => {
    let action = movieActions.getAllCast({id: idProps});
    dispatch(action);
  };
  //action lấy ra all diễn viên chuyền vào id của movie
  const dispactchTrailerOfMovie = () => {
    let action = trailerAction.getALLTrailersOfMovie(idProps);
    dispatch(action);
  };
  //chạy đầu khi mà component được gọi sẽ dispatch get all diễn viên
  useEffect(() => {
    try {
      async function fetchMyAPI() {
        await dispactchCast();
        await dispactchTrailerOfMovie();
      }

      fetchMyAPI();
    } catch (error) {
      console.log('ERROR MOVIDETAIL CASS: ', error);
    }
  }, [idProps]);

  // lấy ra 5 diễn viên dựa vào index
  const dataCastCut = dataCast?.filter((it: any, index: number) => index < 5);

  //lấy ra movie có  id được truyền vào
  const data = useSelector((state: any) => {
    try {
      return state.movie.allmovie.results.find((movie: any) => {
        return movie.id === idProps;
      });
    } catch (error) {
      console.log('error', error);
    }
  });

  //DATA HOT lấy từ store về
  const dataHot = useSelector((state: any) => {
    try {
      if (state.movie.allmovieHot.results) {
        return state.movie.allmovieHot.results.find((movie: any) => {
          return movie.id === idProps;
        });
      } else {
        return;
      }
    } catch (error) {
      console.log('error', error);
    }
  });

  // lấy tất cả trailer của 1 bộ phim trên store về
  const trailer = useSelector((state: any) => {
    if (state.trailer.allTrailerOfMovie.youtube) {
      return state.trailer.allTrailerOfMovie.youtube;
    }
    return false;
  });

  //nếu data đã có thì hiện view của data phim page
  if (data) {
    return (
      <ItemMovieDetail
        data={dataCastCut}
        date={data.release_date}
        vote_average={data.vote_average}
        title={data.title}
        image={data.backdrop_path}
        overview={data.overview}
        trailer={trailer}
        castDataAll={dataCast}
      />
    );
  }

  // dataHot true thì trả về giao diện
  return (
    <View>
      {dataHot && (
        <ItemMovieDetail
          data={dataCastCut}
          date={dataHot.release_date}
          vote_average={dataHot.vote_average}
          title={dataHot.title}
          image={dataHot.backdrop_path}
          overview={dataHot.overview}
          trailer={trailer}
          castDataAll={dataCast}
        />
      )}
    </View>
  );
};

export default MovieDetail;

//options của screen đưa vào option trên navigation
export const screenOption: any = (navData: any) => {
  //navData đây như là 1 cái props thôi
  return {
    headerTitle: navData.route.params.name,
    headerTitleAlign: 'center',
  };
};
