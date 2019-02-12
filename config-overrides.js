const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  // babel-plugin-import
  config = injectBabelPlugin(['import', {
    "libraryName": 'antd',
    "libraryDirectory": "es",
    "style": 'css',
    //style: true,
  }], config);

  return config;
};