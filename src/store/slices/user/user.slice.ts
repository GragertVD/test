import { MessageI } from '../../../types/Message';
import { UserState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  messages: [],
  inputMessage: ''
}

const UserSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<{ message: MessageI }>) {
      state.messages.push(action.payload.message)
    },
    changeInputMessage(state, action: PayloadAction<{ body: string }>) {
      state.inputMessage = action.payload.body
    },
  }
})
export const { addMessage, changeInputMessage } = UserSlice.actions
export default UserSlice.reducer