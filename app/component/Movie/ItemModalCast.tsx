import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getImageURL} from '../../configs/api';

const ItemModalCast = (props: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: getImageURL(props.image)}} />
      <View style={styles.detail}>
        <Text>Name: {props.name}</Text>
        <Text>Character: {props.character}</Text>
      </View>
    </View>
  );
};

export default ItemModalCast;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  img: {
    width: 100,
    height: '100%',
    borderRadius: 10,
    marginRight:5
  },
  detail: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
});
