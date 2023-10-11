import { ServerState } from './slices/server/types';
import { WebSocketState } from './slices/webSocket/types';

export interface AppState {
  webSocket: WebSocketState,
  server: ServerState,
}
