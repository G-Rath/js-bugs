declare module 'memfs' {
  export class Volume {
    public fromJSON(json: {
      [filename: string]: string | null;
    }, cwd?: string): void;
  }
}
