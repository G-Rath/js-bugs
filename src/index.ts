import { BotSocket, RequestType } from './file';
import { enumerate } from 'ts-transformer-enumerate';

enumerate<BotSocket.RequestType>();
enumerate<RequestType>();
