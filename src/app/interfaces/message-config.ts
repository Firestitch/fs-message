import { MessageMode } from '../enums';

export interface BaseMessageConfig {
  mode?: MessageMode,
  icon?: string,
  message?: string,
  title?: string
}
