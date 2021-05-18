import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import YoutubePlayer from 'react-native-youtube-iframe';

const ItemYotubeTrailer = (props: any) => {
  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={hp(20)}
        width={wp(85)}
        play={false}
        videoId={props.source}
      />
    </View>
  );
};

export default ItemYotubeTrailer;

const styles = StyleSheet.create({
  container: {
    height: hp(25),
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: wp('2'),
    marginVertical: hp('2'),
    margin: 5,
  },
});
