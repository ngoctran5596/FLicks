import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as wp,
  widthPercentageToDP as hp,
} from 'react-native-responsive-screen';

const cardMovieType = (props: any) => {
  const window = Dimensions.get('window');
  const screen = Dimensions.get('screen');
  const [dimension, setDimensions] = useState({window, screen});

  const onChange = ({window, screen}: any) => {
    setDimensions({window, screen});
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <TouchableOpacity
      onPress={props.onSelect}
      style={{...styles.container, width: dimension.window.width - wp('3')}}>
      <Image
        source={require('../../assets/image/type.jpg')}
        style={styles.img}
      />
      <Text style={styles.text}>Thể Loại: {props.name}</Text>
    </TouchableOpacity>
  );
};

export default cardMovieType;

const styles = StyleSheet.create({
  container: {
    padding: wp('1'),
    height: hp('30%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp('1.5'),
    borderWidth: 1,
    borderRadius: wp('2'),
  },
  img: {width: '100%', height: '100%', resizeMode: 'cover'},
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
