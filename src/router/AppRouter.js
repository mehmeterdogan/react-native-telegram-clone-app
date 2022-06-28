// In App.js in a new project

import * as React from 'react';
import {View,Text} from 'react-native'
import TabRouter from './TabRouter';
import StackRouter from './StackRouter';
import { useSelector,useDispatch } from 'react-redux';
import {AutReducer, setUser} from '../redux/Reducer/AutReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';



function AppRouter() {


  const [isLoading,setIsLoading] = React.useState(true);
  const user = useSelector(state=>state.AutReducer.user);
  const dispatch = useDispatch();


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  React.useEffect(()=>{
    getData().then(text=>{
      if( text ){
        dispatch(setUser({login: true}));
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    });
  })

  const LoadingComponent = ()=>{
    return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text>Yükleniyor</Text></View>
  }


  return (
    <>
      {
      
        isLoading ?
        <LoadingComponent />
        :
        (
          user.isLogin ?
          <TabRouter/>
          :
          <StackRouter/>
        )
      }
    </>
  );
}

export default AppRouter;
