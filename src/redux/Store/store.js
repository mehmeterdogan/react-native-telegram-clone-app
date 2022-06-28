import { configureStore } from '@reduxjs/toolkit'
import AutReducer from '../Reducer/AutReducer'

export default configureStore({
  reducer: {
    AutReducer : AutReducer,
  },
})