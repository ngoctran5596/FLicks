import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {getImageURL} from '../../configs/api';

const MovieItemVideo = (props: any) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={{...props.style, ...styles.product}}>
      <TouchableOpacity style={styles.vote}>
        <Text style={styles.text}>{props.vote}</Text>
      </TouchableOpacity>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{uri: getImageURL(props.image)}}
              />
            </View>
            <View style={styles.detail}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.button}>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

export default MovieItemVideo;

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: heightPercentageToDP('30%'),
    margin: 10,
    flexDirection: 'column',
    flex: 1,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  detail: {
    alignItems: 'center',
    height: '25%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    paddingHorizontal: 20,
  },
  icon: {
    width: 100,
    height: 100,
    position: 'absolute',
    left: '35%',
    top: '30%',
    alignContent: 'center',
    zIndex: 1,
  },
  vote: {
    width: 100,
    height: 40,
    position: 'absolute',
    right: -0,
    padding: 2,
    backgroundColor: '#f1b722',
    top: -10,
    zIndex: 1,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    height: '100%',
    width: '100%',
    marginTop: 5,
    color: 'white',
    textAlign: 'center',
  },
});
