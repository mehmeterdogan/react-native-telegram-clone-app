import {View, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView, Switch} from 'react-native';
import {NativeBaseProvider, Box, Text} from 'native-base';
import {colors} from '../../../const/colors';
import PhoneInput from 'react-native-phone-number-input';
import {useSelector, useDispatch} from 'react-redux';
import {AutReducer, setUser} from '../../../redux/Reducer/AutReducer';
import TopHeader from '../../../component/top-header/TopHeader';
import {welcomeStyles} from '../../../styles/welcome-styles';
import { globalStyles } from '../../../styles/global-styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Welcome = () => {
  const [countryName, setCountryName] = React.useState('TR');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const phoneInput = React.useRef(null);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const user = useSelector(state=>state.AutReducer.user);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify({...value,phone:phoneNumber,isLogin: true}));
      dispatch(setUser({phoneNumber, login: true}));
    } catch (e) {
     // return false;
    }
  }

  const nextSubmit = () => {
    if (phoneNumber.length != 10) {
      alert('Lütfen telefon numarasını 10 haneli olacak şekilde giriniz');
      return;
    }
    storeData(user);
  };

  const dispatch = useDispatch();

  return (
    <NativeBaseProvider>
      <SafeAreaView style={globalStyles.container}>
        <TopHeader
          text=""
          leftComponent={
            <TouchableOpacity>
              <Text color={colors.blue} fontWeight="normal" h1>
                Cancel
              </Text>
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity
              onPress={text => {
                nextSubmit();
              }}>
              <Text color={colors.blue} fontWeight="bold">
                Next
              </Text>
            </TouchableOpacity>
          }
        />

        <View style={welcomeStyles.centerContainer}>
          <Text fontSize={30} textAlign="center">
            Your Phone
          </Text>
          <Text textAlign={'center'} paddingX="16">
            Please confirm your country code and enter your phone number.
          </Text>
          <View style={welcomeStyles.hrBorder} />
          <Text ml={8} fontSize="20" paddingY={2}>
            {countryName}
          </Text>
          <View>
            <View
              style={{
                top: -7,
                left: '10%',
                position: 'absolute',
                backgroundColor: colors.white,
                borderLeftColor: colors.light_gray,
                borderRightWidth: 0.3,
                borderBottomWidth: 0.3,
                width: 15,
                height: 15,
                zIndex: 1,
                transform: [{rotate: '45deg'}],
              }}
            />
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="TR"
              layout="second"
              disableArrowIcon={true}
              autoFocus
              placeholder="Your phone number"
              containerStyle={welcomeStyles.phoneContainer}
              textContainerStyle={welcomeStyles.textInput}
              onChangeCountry={text => {
                setCountryName(text.cca2);
              }}
              onChangeText={text => {
                setPhoneNumber(text);
              }}
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
              paddingHorizontal: 16,
            }}>
            <Text>Sync Contacts</Text>
            <Switch
              trackColor={{
                false: colors.light_gray,
                true: colors.light_success,
              }}
              thumbColor={colors.white}
              ios_backgroundColor={colors.light_gray}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Welcome;
