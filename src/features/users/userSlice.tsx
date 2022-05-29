import {createSlice} from '@reduxjs/toolkit';

const initialState: any = [];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const {id, name, email} = action.payload;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const {id} = action.payload;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        return state.filter(user => user.id != id);
      }
    }
  }
});
export const {deleteUser} = userSlice.actions;
export const {addUser} = userSlice.actions;
export const {editUser} = userSlice.actions;
export default userSlice.reducer;
