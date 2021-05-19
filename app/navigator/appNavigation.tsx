import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import { Color } from '../configs/style';
import MovieType from '../modules/screens/MovieHot/MovieHotType';
import MovieHotList, { screenOption as MovieHotOptions } from '../modules/screens/MovieHot/MovieHotList';
import MovieDetailScreen, {
  screenOption as MovieDetailOption
} from '../modules/screens/MoviePage/MovieDetail';
import MovieScreen from '../modules/screens/MoviePage/MoviesList';
import SplassScreen from '../modules/screens/splash/index';


const Stack = createStackNavigator();
const MyTabVideo = () => {
  return (
    <Stack.Navigator initialRouteName='TOPHOT'>
      <Stack.Screen name="TOPHOT" component={MovieType}  options={{headerShown:false}}/>
      <Stack.Screen name="CATEGORY" component={MovieHotList} options={MovieHotOptions} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const AppScreen = () => {
  return (
    <Tab.Navigator initialRouteName="HOME" activeColor="black" shifting={true}>
      <Tab.Screen
        name="HOME"
        component={MovieScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{width: 30, height: 25}}
              source={require('../assets/image/iconbuttontab.png')}
            />
          ),
          tabBarColor: Color.orange,
        }}
      />
      <Tab.Screen
        name="MOVIE HOT"
        component={MyTabVideo}
        options={{
          tabBarIcon: props => (
            <Image
              style={{width: 30, height: 25,}}
              source={require('../assets/image/moviehot.png')}
            />
          ),
          tabBarColor: Color.lightblue,
        }}
      />
    </Tab.Navigator>
  );
};

const NavigatorApp = createStackNavigator();

const InitialNavigator = () => {
  return (
    <NavigatorApp.Navigator>
      <NavigatorApp.Screen
        name="SPLASH"
        component={SplassScreen}
        options={{headerShown: false}}
      />
      <NavigatorApp.Screen
        name="HOMEMOVIE"
        component={AppScreen}
        options={{headerShown: false}}
      />
       <NavigatorApp.Screen
        name="DETAIL"
        component={MovieDetailScreen}
        options={MovieDetailOption}
      />
    </NavigatorApp.Navigator>
  );
};

export default InitialNavigator;
