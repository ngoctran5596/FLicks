import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CardMovieType from '../../../component/Movie/CardMovieType';
import * as actions from '../../../redux/moive/action';

const MovieVideo = (props: any) => {
  const dispatch = useDispatch();

  //lấy tất cả thể loại của movie hành động,tâm lý,....
  const distpatchGetAllMovieType = () => {
    let action = actions.movieActions.getAllMovieType(null);
    dispatch(action);
  };

  //chạy action
  useEffect(() => {
    try {
      distpatchGetAllMovieType();
    } catch (error) {
      console.log('error Movie hot detail', error);
    }
  }, []);

  //lấy data từ store về
  const data = useSelector((state: any) => {
    if (state.movie.allmovieType.genres) {
      return state.movie.allmovieType.genres;
    } else {
      return [];
    }
  });
 
  //Navigation qua 
  const onSelectType = (id: any, name: any) => {
    props.navigation.navigate('CATEGORY', {id: id, name: name});
  };

  return (
    <View style={{width:'100%',height:"100%"}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={itemData => {
          return (
            <CardMovieType
              onSelect={() =>
                onSelectType(itemData.item.id, itemData.item.name)
              }
              name={itemData.item.name}
            />
          );
        }}
      />
    </View>
  );
};
export default MovieVideo;
