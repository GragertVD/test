import { MessageI } from '../../../types/Message';

export interface ServerState {
  messages: MessageI[],
  inputMessage: string
}