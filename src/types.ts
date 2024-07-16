export interface ScpDeployOption {
  // deploy unique name
  namespace: string
  // remote deploy host
  host: string
  // remote deploy username, default is root
  username: string
  // remote deploy path
  targetPath: string
  // local build command, default is `npm run build`
  buildCmd: string
  // remote deploy port, default is 22
  port: string
  // local build output dir, default is dist
  buildDir: string
}
