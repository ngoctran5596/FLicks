import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getImageURL} from '../../configs/api';

const CastItem = (props: any) => {
  return (
    <View style={styles.cartItem}>
      <Image style={styles.image} source={{uri: getImageURL(props.image)}} />
      <Text style={styles.mainText}>{props.name}</Text>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  cartItem: {
    margin: wp('1'),
    width: wp('30'),
    height: hp('15'),
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: wp('2'),
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: wp('2'),
  },
  mainText: {
    width: '100%',
    height: '30%',
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontSize: 10,
  },
});
