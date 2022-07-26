// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
const { execSync } = require('child_process')
const path = require('path')

const runScript = () => {
  const content = fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8')
  const packageJson = JSON.parse(content)
  packageJson.dependencies = {}
  delete packageJson.devDependencies
  packageJson.scripts = {}
  execSync('npm run prebuild')
  const outFilePath = path.join(__dirname, '..', 'dist', 'package.json')
  fs.writeFileSync(outFilePath, JSON.stringify(packageJson))
}

runScript()