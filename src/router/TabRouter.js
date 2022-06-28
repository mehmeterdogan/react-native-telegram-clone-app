import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Chats from '../screens/Chats';
import Calls from '../screens/Calls';
import Contacts from '../screens/Contacts';
import Settings from '../screens/Settings';
import {Badge, Image, NativeBaseProvider, Text} from 'native-base';
import {colors} from '../const/colors';

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Chats"
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Contacts') {
                return (
                  <FontAwesome name={'user-circle'} size={size} color={color} />
                );
              } else if (route.name === 'Calls') {
                return (
                  <FontAwesome5 name={'phone-alt'} size={size} color={color} />
                );
              } else if (route.name === 'Chats') {
                return (
                  <>
                    <Text
                      style={{
                        fontSize: 11,
                        color: colors.white,
                        textAlign: 'center',
                        width: 18,
                        height: 18,
                        borderRadius: 9,
                        zIndex: 4,
                        backgroundColor: colors.danger,
                        overflow: 'hidden',
                        marginBottom: -16,
                        marginRight: -25,
                      }}
                      borderRadius="full">
                      3
                    </Text>
                    <Ionicons
                      name={'ios-chatbubbles-sharp'}
                      size={size}
                      color={color}
                    />
                  </>
                );
              } else if (route.name === 'Settings') {
                return (
                  <Image
                    source={require('../assets/user/Oval.png')}
                    alt="resim"
                  />
                );
              }

              // You can return any component that you like here!
            },
            tabBarActiveTintColor: colors.blue,
            tabBarInactiveTintColor: colors.gray,
          })}>
          <Tab.Screen name="Contacts" component={Contacts} />
          <Tab.Screen name="Calls" component={Calls} />
          <Tab.Screen name="Chats" component={Chats} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
