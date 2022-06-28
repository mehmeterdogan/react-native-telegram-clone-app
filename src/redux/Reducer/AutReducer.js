import { createSlice } from '@reduxjs/toolkit'

export const AutReducer = createSlice({
  name: 'AutReducer',
  initialState: {
    user:{
      name:'',
      lastName:'',
      phone:'',
      isLogin:false
    }
  },
  reducers: {
    setUser: (state,action) => {
      state.user =  {...state.user,phone:action.payload.phoneNumber,isLogin:action.payload.login};

    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = AutReducer.actions

export default AutReducer.reducer