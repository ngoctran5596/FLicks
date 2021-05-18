import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const cardTrailer = (props: any) => {
  console.log('props cua video');
  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={false}
        videoId={props.route.params.source}
      />
    </View>
  );
};

export default cardTrailer;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 200,
  },
});
