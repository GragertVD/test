import { webSocketMiddleware } from './middleware/webSocket.middleware';
import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./types";
import webSocketReducer from './slices/webSocket/webSocket.slice'
import UserReducer from './slices/user/user.slice'

export const store = configureStore<AppState>({
  reducer: {
    webSocket: webSocketReducer,
    user: UserReducer,
  },
  middleware: [webSocketMiddleware],
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
