import { MessageI } from '../../../types/Message';

export interface UserState {
  messages: MessageI[],
  inputMessage: string
}