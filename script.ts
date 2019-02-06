import * as http from 'http';

const fileUrl: string = 'https://raw.githubusercontent.com/photonstorm/phaser3-docs/master/typescript/phaser.d.ts';

http.get(fileUrl, {}, (res) => {
  const { statusCode } = res;

  if (statusCode !== 200) {
    throw new Error(`Request failed with status code ${statusCode}`);
  }

  res.setEncoding('utf-8');
  const chunks = [];

  res.on('data', chunks.push);
});
