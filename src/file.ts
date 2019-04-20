export namespace BotSocket {
  export type RequestType =
    | 'handshake'
    | 'submit-query'
    | 'submit-event'
    | 'render-letter'
    ;
}
