import React, {useEffect, useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';


const Splash = (props: any) => {
  const window = Dimensions.get('window');
  const screen = Dimensions.get('screen');
  const [dimensions, setDimensions] = useState({window, screen});

  //funcion onchange set value of dimensions
  const onChange = ({window, screen}: any) => {
    setDimensions({window, screen});
  };
  // run change screen size
  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <Swiper
      style={{
        width: dimensions.window.width * 3,
        height: dimensions.window.height * 3,
      }}
      // disable button onPress behavior
      loop={false}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{
          ...styles.image,
          width: dimensions.window.width,
          height: dimensions.window.height,
        }}>
        <Text style={styles.text}>MOVIE</Text>
      </ImageBackground>
      <ImageBackground
        source={require('../../../assets/image/cinema.jpg')}
        style={{
          ...styles.image,
          width: dimensions.window.width,
          height: dimensions.window.height,
        }}>
        <Text style={styles.text}>CINEMA</Text>
      </ImageBackground>
      <ImageBackground
        source={require('../../../assets/image/lestgo.jpg')}
        style={{
          ...styles.image,
          width: dimensions.window.width,
          height: dimensions.window.height,
        }}>
        <Text style={{fontSize: 50, color: 'white'}}>LES'T</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HOMEMOVIE')}>
          <Text style={styles.textGo}>GO</Text>
        </TouchableOpacity>
      </ImageBackground>
    </Swiper>
  );
};

export default Splash;
const styles: any = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    alignItems: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  textGo: {
    width: 100,
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 15,
    borderRadius: 20,
  },
});
