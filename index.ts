import { makeFactory } from 'factory.ts';

interface Mx {
  data: {
    prop: string | null;

    [K: string]: unknown;
  };
}

const f = makeFactory<Mx>({ data: { prop: null } });

const f1 = f.build();
const f2 = f.build({
  ...f1,
  data: {
    ...f1.data,
    v: 'hello world'
  }
});
