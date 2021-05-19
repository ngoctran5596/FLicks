import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import ItemMovie from '../../../component/Movie/MovieItem';
import * as actions from '../../../redux/moive/action';

const MoviesListVideo = (props: any) => {
  const window = Dimensions.get('window');
  const screen = Dimensions.get('screen');
  const [id, setId] = useState(props.route.params.id);
  const dispatch = useDispatch();
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }:any) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  //dimensions  lắng nghe sự thay đổi và gọi lại onChange
  Dimensions.addEventListener('change', onChange);
  const axiosApiCall = async () => {
    let action = actions.movieActions.getAllMovieHot(id);
    dispatch(action);
  };

  useEffect(() => {
    try {
      axiosApiCall();
    } catch (error) {
      console.log('error axios', error);
    }
  }, [id]);

  const data = useSelector((state: any) => {
    if (state.movie.allmovieHot.results) {
      return state.movie.allmovieHot.results;
    }
    return false;
  });
  const detailMovie = (itemData: any) => {
    props.navigation.navigate('DETAIL', {
      id: itemData.item.id,
      name: itemData.item.title,
    });
  };

  if (!data) {
    return (
      <ActivityIndicator size="large" color="red" style={styles.activity} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        key={dimensions.window.width + ''}
        numColumns={dimensions.window.width > 360 ? 3 : 2}
        keyExtractor={(item: any, index: any) => index}
        data={data}
        renderItem={itemData => (
          <ItemMovie
            onSelect={() => detailMovie(itemData)}
            title={itemData.item.title}
            image={itemData.item.backdrop_path}
            vote={itemData.item.vote_average}></ItemMovie>
        )}
      />
    </View>
  );
};

export default MoviesListVideo;

export const screenOption: any = (navData: any) => {
  return {
    headerTitle: navData.route.params.name,
    headerTitleAlign: 'center',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  activity: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
