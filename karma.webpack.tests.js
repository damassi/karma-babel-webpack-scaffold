import 'babel/polyfill';

// Utilize Webpack's dynamic require to fetch only relevant files
var context = require.context('./src/', true, /\.spec\.(js|jsx)$/);

// Require matches
context.keys().forEach(context);
