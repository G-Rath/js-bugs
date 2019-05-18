const fn = api => {
  const isTestEnv = api.env('test');

  api.cache(true);

  return ({
    'sourceType': 'unambiguous',
    presets: [
      [
        '@babel/preset-env',
        {
          modules: isTestEnv,
          // modules: false,
          forceAllTransforms: true,
          // exclude: ['transform-typeof-symbol']
          targets: {
            browsers: [
              'last 2 major versions',
              'ie >= 11'
            ]
          }
        }
      ],
      ['@babel/preset-react']
    ],
    plugins: [
      // require('@babel/plugin-syntax-dynamic-import'),
      // require('babel-plugin-dynamic-import-node'),
      // require('@babel/plugin-transform-destructuring'),
      // [
      //   require('@babel/plugin-proposal-class-properties'),
      //   { spec: true }
      // ],
      // [
      //   require('@babel/plugin-proposal-object-rest-spread'),
      //   { useBuiltIns: true }
      // ],
      // [
      //   require('@babel/plugin-transform-runtime'),
      //   {
      //     helpers: false,
      //     regenerator: true
      //   }
      // ],
      // [
      //   require('@babel/plugin-transform-regenerator'),
      //   { async: false }
      // ]
    ]
  });
};

module.exports = fn;

// require('babel-plugin-macros'),
// require('@babel/plugin-syntax-dynamic-import').default,
// isTestEnv && require('babel-plugin-dynamic-import-node'),

/*
    presets: [
      isTestEnv && [
        require('@babel/preset-env').default,
        {
          ...common,
          useBuiltIns: false
        }
      ],
      (isProductionEnv || isDevelopmentEnv || isDisasterRecoveryEnv || isStagingEnv || isUatEnv) && [
        require('@babel/preset-env').default,
        {
          ...common,
          forceAllTransforms: true,
          useBuiltIns: 'entry',
          corejs: 2,
          exclude: ['transform-typeof-symbol']
        }
      ],
 */
