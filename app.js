require('./component');

if (module.hot) {
  module.hot.accept((err) => {
    if (err) {
      console.error('HMR', err);
    }
  });
}

console.log('hi!');
// uncomment to produce a build error
// if (!window) {
//   require('tests');
// }

// uncomment to produce a build warning
// console.log(require);
