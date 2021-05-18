import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import ItemMovie from '../../../component/Movie/MovieItem';
import * as actions from '../../../redux/moive/action';

interface Iprops {
  trailer: any;
  navigation: any;
  trailerAction: any;
}
const MoviesList = (props: Iprops) => {
  const window = Dimensions.get('window');
  const screen = Dimensions.get('screen');
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [dimensions, setDimensions] = useState({window, screen});
  //query lấy ra tất cả movie
  const data = useSelector((state: any) => state.movie.allmovie.results);
  const year: any = [];
  //lặp push vào mảng đỡ ghi bằng tay
  for (let i = 1964; i <= 2021; i++) {
    year.push({label: i.toString(), value: i.toString()});
  }
  //Thay đổi màn hình là sét lại kích thước
  const onChange = ({window, screen}: any) => {
    setDimensions({window, screen});
  };

  //dimensions  lắng nghe sự thay đổi và gọi lại onChange
  useEffect(() => {
    Dimensions.addEventListener('change',onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  //Đưa mảng vào items để vào dropdow
  const [items, setItems] = useState(year);

  //DropDownPicker các hàm cần thiết để nó hoạt động
  //tắt mở dropdow
  const setOpenF = (open: any) => {
    setOpen(open);
  };

  //setValue picker
  const setValueF = async (callback: any) => {
    console.log(callback);
    await setValue((state: any) => {
      return callback(state);
    });
  };
  //hàm mình tạo để dispatch action khi an button
  const serarchYear = async (year: any) => {
    let action = actions.movieActions.getAllMovieYear(year);
    await dispatch(action);
  };

  // set Item picker
  const setItemsF = (callback: any) => {
    setValue((state: any) => {
      return callback(state.items);
    });
  };

  //mới vào chạy 1 dispatch lấy all video về set vào data
  useEffect(() => {
    try {
      dispatchTrailer();
    } catch (error) {
      console.log('error axios', error);
    }
  }, []);

  //action action nè
  const dispatchTrailer = () => {
    const action = actions.movieActions.getAllMovie();
    dispatch(action);
  };

  //navigation  sang movie detail
  const detailMovie = (itemData: any) => {
    props.navigation.navigate('DETAIL', {
      id: itemData.item.id,
      name: itemData.item.title,
    });
  };
  //set layout đang đượi load data
  if (!data) {
    return (
      <View style={styles.activityindicator}>
        <ActivityIndicator size="large" color="red" />
        <Text>LOADING</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.dropdown}>
        <View style={styles.search}>
          <View style={{width: '80%'}}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpenF}
              setValue={state => setValueF(state)}
              setItems={state => setItemsF(state)}
              onPress={() => setValue(null)}
            />
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => serarchYear(value)}>
              <Image
                style={styles.image}
                source={require('../../../assets/image/iconSeacrch.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.flatlist3}>
        <FlatList
          key={dimensions.window.width+'-'}
          numColumns={dimensions.window.width>360 ? 3 : 2}
          keyExtractor={(item: any, index: any) => index}
          data={data}
          renderItem={(itemData: any) => (
            <ItemMovie
              onSelect={() => detailMovie(itemData)}
              title={itemData.item.title}
              image={itemData.item.backdrop_path}
              vote={itemData.item.vote_average}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MoviesList;
export const screenOptions = (navData: any) => {
  return {
    headerTitle: 'MOVIE',
  };
};

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: 'row',
    width: '100%',
    height: hp('10%'),
  },
  activityindicator: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'column',
    padding: wp('2'),
    height:'100%'
  },
  search: {
    width: '100%',
    flexDirection: 'row',
  },
  image: {
    width: wp('10'),
    height: hp('4'),
  },
  flatlist3: {
    width: '100%',
    height: hp('72%'),
  },
  icon: {
    width: '20%',
    height: hp('8'),
    backgroundColor: 'white',
    borderRadius: wp(2),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
