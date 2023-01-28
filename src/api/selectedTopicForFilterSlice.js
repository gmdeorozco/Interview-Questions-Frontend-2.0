import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { selectedTopicForFilter : "" }
]

const selectedTopicForFilter = createSlice({
  name: 'selectedTopicForFilter',
  initialState,
  reducers: {
    updateSelectedTopicForFilter: ( state, action ) =>{
      state.values = action.payload;
    }
  }
})

export default selectedTopicForFilter.reducer