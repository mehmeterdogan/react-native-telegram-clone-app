import { TouchableOpacity, SafeAreaView, View } from 'react-native'
import React from 'react'
import {NativeBaseProvider,Text} from 'native-base'
import {globalStyles} from '../styles/global-styles'
import TopHeader from '../component/top-header/TopHeader'
import { colors } from '../const/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Settings = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={globalStyles.container}>
        <TopHeader
          text="Settings"
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

            <Text>
                Settings
            </Text>

        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Settings;