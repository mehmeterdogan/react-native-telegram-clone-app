import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../const/colors';

export const welcomeStyles = StyleSheet.create({

  centerContainer: {
    flex: 11,
    paddingHorizontal:10,
  },
  hrBorder: {
    borderWidth: 0.3,
    borderColor: colors.light_gray,
    marginVertical: 25,
  },
  phoneContainer: {
    width: '100%',
    height: 50,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderTopColor: colors.light_gray,
    borderBottomColor: colors.light_gray,
    borderWidth: 0.3,
  },
  textInput: {
    paddingVertical: 0,
    borderRightWidth:0,
    borderTopColor: colors.light_gray,
    borderBottomColor: colors.light_gray,
    borderWidth: 0.3,
    backgroundColor: colors.white,
  },
});
