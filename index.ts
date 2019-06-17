import { Factory, makeFactory } from 'factory.ts';

interface Mx {
  prop1: string;
  prop2: number;
}

const MxFactory = makeFactory<Mx>({
  prop1: '',
  prop2: 1
});

const bindBuild = <T, K extends keyof T, F extends Factory<T, K>>(factory: F): F['build'] => factory.build.bind(factory);

export const buildMx = bindBuild(MxFactory);

buildMx({});
