import { UserState } from './slices/user/types';
import { WebSocketState } from './slices/webSocket/types';

export interface AppState {
  webSocket: WebSocketState,
  user: UserState,
}
