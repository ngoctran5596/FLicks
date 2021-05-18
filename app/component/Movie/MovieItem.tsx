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
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {getImageURL} from '../../configs/api';

const movieItem = (props: any) => {
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
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

export default movieItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: wp('2'),
    elevation: wp('5'),
    borderRadius: wp(3),
    backgroundColor: 'white',
    height: hp(35),
    width: '100%',
    margin: 10,
    flexDirection: 'column',
    flex: 1,
  },
  touchable: {
    borderRadius: wp(3),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: hp('20'),
    borderTopLeftRadius: wp(3),
    borderTopRightRadius: wp(3),
    overflow: 'hidden',
  },
  detail: {
    alignItems: 'center',
    height: hp('15'),
    padding: wp(3),
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  vote: {
    width: wp(9),
    height: wp(10),
    position: 'absolute',
    right: 0,
    padding: 2,
    backgroundColor: '#f1b722',
    top: -wp(3),
    zIndex: 1,
    borderRadius: wp(3),
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    height: '100%',
    width: '100%',
    marginTop: wp(1),
    color: 'white',
  },
});
