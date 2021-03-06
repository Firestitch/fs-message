import { BaseMessageConfig } from './message-config';

export interface MessageToastConfig extends BaseMessageConfig {
  timeout?: number,
  progressBar?: boolean,
  progressAnimation?: 'decreasing' | 'increasing',
  positionClass?: string
}
