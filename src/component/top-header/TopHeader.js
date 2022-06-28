import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import { colors } from '../../const/colors';
import {styles} from '../../styles/top-header-style';

const TopHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      {props.leftComponent}
      <Text style={styles.textBold}>
          {props.text?props.text:''}
      </Text>
      {props.rightComponent}
    </View>
  );
};

export default TopHeader;

