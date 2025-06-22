const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://wagnerweinert.com.br',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  }
];
module.exports = PROXY_CONFIG;
