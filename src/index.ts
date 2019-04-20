import { BotSocket } from '@src/file';
import { enumerate } from 'ts-transformer-enumerate';

// export namespace BotSocket {
//   export type RequestType =
//     | 'handshake'
//     | 'submit-query'
//     | 'submit-event'
//     | 'render-letter'
//     ;
// }

enumerate<BotSocket.RequestType>();
