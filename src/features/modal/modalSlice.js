import  {createSlice} from '@reduxjs/toolkit'


const initialState = {
  isOpen:false,

}

const modalSlice = createSlice({
  name:'Modal',
  initialState,
  reducers:{
    openModal:(state,action)=>{
      state.isOpen = treu;
    },
    openModal:(state,action)=>{
      state.isOpen = false;
    },
  }
});

export const {openModal,closeModal} = modalSlice.actions;
export default modalSlice.reducer;