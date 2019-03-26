const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
console.log('CALLING');
module.exports = withTypescript(withSass());
