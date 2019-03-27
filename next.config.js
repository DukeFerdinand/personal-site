const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
console.log('CALLING');

const nextConfig = {
  exportPathMap() {
    // Tell Next which routes we'd like to static render
    return {
      '/': {page: '/'},
    };
  },
};

module.exports = withTypescript(withSass(nextConfig));
