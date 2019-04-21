import { enumerate } from 'ts-transformer-enumerate';
import { BotSocket, RequestType } from './file';

enumerate<BotSocket.RequestType>();
enumerate<RequestType>();
