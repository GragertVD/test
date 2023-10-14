import { MessageI } from '../../../types/Message';
import { ServerState } from './types';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: ServerState = {
  messages: ['server start'],
  inputMessage: 'server start'
}


const SERVER_PATH = 'https://play.gcapp.ru/server/';
const SECRET = 'npaP 2oA 6F:o5ma2w8*P4Aцxvk[ацpTы ф';

const query = (user_id: number, query: string, data: any, response: any, error = () => { }) => {
  axios.post(
    SERVER_PATH + 'capi.php',
    {
      query: query,
      data: data,
      secret: SECRET,
      uid: user_id,
      referer: document.location.href,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then(response).catch(error);
}

export const getUser = createAsyncThunk(
  'server/getUser',
  async function () {

    // console.log('start getUSer');
    // return "return data"
    
    try {
      const response =
        query(27303690, 'getUser', { ref: null }, (data: any) => {
          console.log('succes', data);
          return data;
        },
          () => { throw new Error('123') });

    } catch (error) {

    }
  }
);

const ServerSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<{ message: String }>) {
      console.log("message");
      
      state.messages.push(action.payload.message)
    },
    changeInputMessage(state, action: PayloadAction<{ body: string }>) {
      state.inputMessage = action.payload.body
    },
  },
  extraReducers: {
    [getUser.pending+'']: (state) =>{
      console.log('pending');
    },
    [getUser.fulfilled+'']: (state, action) =>{
      console.log('fulfield', action.payload);
      state.inputMessage = 'succes';
    },
    [getUser.rejected+'']: (state, action) =>{
      console.log('rejected', action.payload);
    },
  },
})

export const { addMessage, changeInputMessage } = ServerSlice.actions
export default ServerSlice.reducer