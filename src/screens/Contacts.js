import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  NativeBaseProvider,
  Input,
  Text,
  Icon,
  Box,
  HStack,
  Avatar,
  VStack,
  Pressable,
  Spacer,
  Center,
} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import {colors} from '../const/colors';
import {globalStyles} from '../styles/global-styles';
import TopHeader from '../component/top-header/TopHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {data} from '../const/data';

const Contacts = () => {
  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState(data);
  const [listData, setListData] = React.useState(data);

  const FirstItem = () => {
    return (
      <>
        <Box>
          <Pressable
            onPress={() => console.log('Tıklandı')}
            _dark={{
              bg: 'coolGray.100',
            }}
            _light={{
              bg: 'white',
            }}>
            <Box pl="4" pr="5" py="2">
              <HStack alignItems="center" space={3}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={38}
                  color={colors.blue}
                />
                <VStack>
                  <Text
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    bold>
                    Add People Nearby
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Pressable>
        </Box>

        <Box>
          <Pressable
            onPress={() => console.log('Tıklandı')}
            _dark={{
              bg: 'coolGray.100',
            }}
            _light={{
              bg: 'white',
            }}>
            <Box pl="4" pr="5" py="2">
              <HStack alignItems="center" space={3}>
                <AntDesign name="adduser" size={38} color={colors.blue} />
                <VStack>
                  <Text
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    bold>
                    Invite Friends
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Pressable>
        </Box>
      </>
    );
  };

  const RenderItem = ({item, index}) => {
    return (
      <Box>
        <Pressable
          onPress={() => console.log('Tıklandı')}
          _dark={{
            bg: 'coolGray.100',
          }}
          _light={{
            bg: 'white',
          }}>
          <Box pl="4" pr="5" py="2">
            <HStack
              alignItems="center"
              space={3}
              pb={3}
              borderBottomColor={colors.light_gray}
              borderBottomWidth={0.2}>
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  color="coolGray.800"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  bold>
                  {item.fullName}
                </Text>
                <Text
                  color={index < 3 ? 'primary.500' : 'coolGray.600'}
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {index < 3 ? 'online' : 'last seen 10 minutes ago'}
                </Text>
              </VStack>
              <Spacer />
              <VStack>
                <Text
                  fontSize="xs"
                  color="coolGray.800"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  alignSelf="flex-start">
                  {' '}
                </Text>
              </VStack>
            </HStack>
          </Box>
        </Pressable>
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={globalStyles.container}>
        <TopHeader
          text="Chats"
          leftComponent={
            <TouchableOpacity style={{opacity: 0}}>
              <Text color={colors.blue} fontWeight="normal" h1>
                Edit
              </Text>
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity onPress={text => {}}>
              <AntDesign name="plus" size={24} color={colors.blue} />
            </TouchableOpacity>
          }
        />

        <View style={globalStyles.subContainer}>
          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            <Box bg="white" safeArea flex="1">
              {listData.map((item, index) => {
                return (
                  <>
                    {index == 0 && <FirstItem />}
                    <RenderItem item={item} index={index} />
                  </>
                );
              })}
            </Box>
          </ScrollView>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Contacts;
