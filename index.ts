const j = (
  n: string,
  voo:
    | string
    | Record<string, string>
    | Record<string, string>
) => {
  const version = typeof voo !== 'string'
    ? voo[n]
    : voo;

  return `${n}@${version}`;
};
