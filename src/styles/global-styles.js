import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../const/colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:40,
    backgroundColor: colors.white,
  },
  subContainer:{
    flex:1,
    paddingHorizontal:10,
  }
});
