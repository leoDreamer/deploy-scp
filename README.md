# deploy-scp

## Description

A front end deploy tool for scp. init config file in your project root directory by command `sdeploy init`, and edit config file to your need. then you can simple deploy your project to remote server by command `sdeploy -n xxx`.

## Useage

1. global install tool `sudo npm install deploy-scp -g`
2. init config file `sdeploy init`
3. edit config file to your need
4. deploy `sdeploy -n xxx(your namespace)`

## Config Field

```js
    // write your deploy namespace, should be unique, use in deploy command to select which server to deploy
    namespace: '',
    // write your remote server host
    host: '',
    // write your remote server static file path
    targetPath: '',
    // write your remote server username
    username: 'root',
    // write your local build command, default is npm run build
    buildCmd: 'npm run build',
    // write your remote server port, default is 22
    port: '22',
    // write your local build output dir
    buildDir: 'dist',
```