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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {data} from '../const/data';


const Chats = () => {


  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState(data);
  const [listData, setListData] = React.useState(data);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = listData.filter( item => {
        const itemData = item.fullName
          ? item.fullName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(listData);
      setSearch(text);
    }
  };


  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...filteredDataSource];
    const prevIndex = listData.findIndex(item => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setFilteredDataSource(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({item, index}) => {
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
            <HStack alignItems="center" space={3}>
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
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {item.recentText}
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
                 {index%2 === 0 ? <Ionicons name="ios-checkmark-done-outline" size={15} color={colors.light_success} /> : <Ionicons name="ios-checkmark" size={15} />}
                 {" "}
                {item.timeStamp}
              </Text>
              <SimpleLineIcons style={{textAlign:"right",marginVertical:5}} name="pin" size={15} color={colors.light_gray} />
              </VStack>
              
            </HStack>
          </Box>
        </Pressable>
      </Box>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HStack flex="1" pl="0">
        <Pressable
          w="70"
          ml="auto"
          cursor="pointer"
          bg="coolGray.200"
          justifyContent="center"
          onPress={() => closeRow(rowMap, data.item.key)}
          _pressed={{
            opacity: 0.5,
          }}>
          <VStack alignItems="center" space={2}>
            <Icon
              as={<Entypo name="dots-three-horizontal" />}
              size="xs"
              color="coolGray.800"
            />
            <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
              More
            </Text>
          </VStack>
        </Pressable>
        <Pressable
          w="70"
          cursor="pointer"
          bg="red.500"
          justifyContent="center"
          onPress={() => deleteRow(rowMap, data.item.id)}
          _pressed={{
            opacity: 0.5,
          }}>
          <VStack alignItems="center" space={2}>
            <Icon
              as={<MaterialIcons name="delete" />}
              color="white"
              size="xs"
            />
            <Text color="white" fontSize="xs" fontWeight="medium">
              Delete
            </Text>
          </VStack>
        </Pressable>
      </HStack>
    );
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={globalStyles.container}>
        <TopHeader
          text="Chats"
          leftComponent={
            <TouchableOpacity>
              <Text color={colors.blue} fontWeight="normal" h1>
                Edit
              </Text>
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity onPress={text => {}}>
              <FontAwesome name="edit" size={24} color={colors.blue} />
            </TouchableOpacity>
          }
        />

        <View style={globalStyles.subContainer}>
          <VStack w="100%" space={5} alignSelf="center" marginY={2}>
            <Input
              onChangeText={text=>{searchFilterFunction(text)}}
              value={search}
              placeholder="Search for messages or users"
              variant="filled"
              width="100%"
              borderRadius="10"
              py="3"
              px="5"
              borderWidth="0"
              InputLeftElement={
                <Icon
                  ml="20"
                  size="4"
                  color="gray.400"
                  as={<Ionicons name="ios-search" />}
                />
              }
            />
          </VStack>

          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            <Box bg="white" safeArea flex="1">
              <SwipeListView
                data={filteredDataSource}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-250}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
              />
            </Box>
          </ScrollView>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Chats;
