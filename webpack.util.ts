import * as path from 'path'
import { compilerOptions } from './tsconfig.json'
import { dependencies } from './package.json'

interface IDictionary<T> {
  [key: string]: T
}

const ALIAS_KEY_REGEX = /[/*]/g
const ALIAS_VAL_REGEX = /[/*@]/g
const alias: IDictionary<string> = {}

const resolveAlias = (): IDictionary<string> => {
  Object.keys(compilerOptions.paths).forEach((iter) => {
    const key = iter.replace(ALIAS_KEY_REGEX, '')
    const val = iter.replace(ALIAS_VAL_REGEX, '')
    alias[key] = path.resolve(compilerOptions.baseUrl, val)
  })

  return alias
}

const externals = () => Object.keys(dependencies)

export { resolveAlias, externals }
