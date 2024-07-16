module.exports = [
  {
    namespace: '', // write your deploy namespace, should be unique, use in deploy command to select which to be deployed
    host: '', // write your remote server host
    targetPath: '', // write your remote server static file path
    username: 'root', // write your remote server username
    buildCmd: 'npm run build', // write your local build command, default is npm run build
    port: '22', // write your remote server port, default is 22
    buildDir: 'dist', // write your local build output dir
  },
]
