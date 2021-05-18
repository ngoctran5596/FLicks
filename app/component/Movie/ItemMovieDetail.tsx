import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {AirbnbRating} from 'react-native-ratings';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {config} from '../../configs/api';
import {Color} from '../../configs/style';
import CastItem from './CardItemCast';
import ItemModalCast from './ItemModalCast';
import ItemYotubeTrailer from './ItemYotubeTrailer';

const ItemMovieDetail = ({
  overview,
  image,
  title,
  data,
  vote_average,
  date,
  trailer,
  castDataAll,
}: any) => {
  const [isLoadModal, setIsLoadModal] = useState(false);

  const onClickSetModal = () => {
    setIsLoadModal(prev => !prev);
  };
  console.log('ISLOADMODAL', isLoadModal);
  return (
    <ScrollView>
      <View style={{margin: 5}}>
        <View style={styles.container}>
          <View style={styles.contenImage}>
            <Image
              style={styles.image}
              source={{uri: config.IMAGE_URL + image}}
            />
            <Text style={styles.texImage}>{date}</Text>
          </View>
          <View style={styles.contenOverview}>
            <ScrollView>
              <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{overview}</Text>
              </View>
            </ScrollView>
            <AirbnbRating
              isDisabled={true}
              defaultRating={(vote_average * 5) / 10}
              size={25}
              showRating={false}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>Cast </Text>
          <TouchableOpacity onPress={() => onClickSetModal()}>
            <Text style={styles.title}>Show all</Text>
          </TouchableOpacity>
        </View>
        {/** VIEW MODAL START */}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isLoadModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setIsLoadModal(!isLoadModal);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{width: '100%'}}>
                  <FlatList
                    data={castDataAll}
                    renderItem={(itemData: any) => {
                      console.log('itemData', itemData);
                      return (
                        <ItemModalCast
                          image={itemData.item.profile_path}
                          name={itemData.item.name}
                          character={itemData.item.character}
                        />
                      );
                    }}
                    keyExtractor={(item: any, index: any) => index}
                  />
                </View>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setIsLoadModal(!isLoadModal)}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        {/** VIEW MODAL END*/}

        {/*custom item ở thư mục components/Movie*/}
        {!data ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <FlatList
            data={data}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={itemData => {
              return (
                <CastItem
                  image={itemData.item.profile_path}
                  name={itemData.item.name}
                />
              );
            }}
          />
        )}
        <Text style={styles.title}>TRAILER</Text>
        <View>
          {trailer.length === 0 ? (
            <Text style={{textAlign: 'center'}}>
              HIỆN TẠI PHIM NÀY CHƯA CÓ TRAILER
            </Text>
          ) : (
            <FlatList
              data={trailer}
              horizontal={true}
              keyExtractor={item => item.source}
              renderItem={itemData => {
                return <ItemYotubeTrailer source={itemData.item.source} />;
              }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemMovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: wp('2'),
    flexDirection: 'row',
    alignContent: 'center',
    width: '100%',
    height: hp('40%'),
  },
  contenImage: {
    width: wp('50%'),
    height: hp('40%'),
  },
  image: {
    width: wp('50%'),
    height: hp('40%'),
    borderRadius: wp('5'),
  },
  texImage: {
    position: 'absolute',
    bottom: 0,
    color: 'white',
    textAlign: 'center',
    width: wp('50%'),
  },
  contenOverview: {flexDirection: 'column', width: '50%', padding: 5},
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 20,
    borderBottomWidth:1
  },
  show: {
    fontSize: 15,
    textDecorationLine: 'underline line-through',
    marginBottom: 20,
  },
  description: {
    width: '100%',
    fontSize: 14,
    flexGrow: 1,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '100%',
    height: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: Color.primaryLight,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
