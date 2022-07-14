import {
  IConfiguration,
  loadConfiguration,
  runCucumber,
} from '@cucumber/cucumber/api'
import { join } from 'path'
import { PassThrough } from 'stream'
import streamToString from 'stream-to-string'
import glob from 'glob'
import { promisify } from 'util'

export const run = async (
  fileName: string,
  cucumberOptions: Partial<IConfiguration> = {},
  throws = false,
): Promise<string> => {
  // clear require cache for support code
  const matches = await promisify(glob)('features/support/*', {
    absolute: true,
    cwd: __dirname,
  })
  matches.forEach((match) => delete require.cache[match])

  const configuration: Partial<IConfiguration> = {
    ...cucumberOptions,
    format: [join(__dirname, '..', 'src')],
    paths: [join(__dirname, 'features', fileName)],
    publishQuiet: true,
    require: [join(__dirname, 'features/**/*.ts')],
  }
  const { runConfiguration } = await loadConfiguration({
    provided: configuration,
  })
  const stdout = new PassThrough()
  const stderr = new PassThrough()
  try {
    await runCucumber(runConfiguration, {
      cwd: join(__dirname, '..'),
      stdout,
      stderr,
    })
  } catch (ex) {
    if (throws) {
      throw ex
    }
  }
  stdout.end()
  stderr.end()
  const result = await streamToString(stdout)
  return result
}
