import test from 'ava'
import { join } from 'path'

import { run } from './exec'

test.serial('logs steps', async (t) => {
  const result = await run('step.feature', { name: ['Step name'] })
  t.snapshot(result)
})

test.serial('warns about ambiguous steps', async (t) => {
  const result = await run('step.feature', { name: ['Ambiguous step'] })
  t.snapshot(result)
})

test.serial('warns about failed steps', async (t) => {
  const result = await run('step.feature', { name: ['Failed step'] })
  t.snapshot(result.replace(join(__dirname, '../'), ''))
})

test.serial('logs passed steps', async (t) => {
  const result = await run('step.feature', { name: ['Passed step'] })
  t.snapshot(result)
})

test.serial('logs pending steps', async (t) => {
  const result = await run('step.feature', { name: ['Pending step'] })
  t.snapshot(result)
})

test.serial('logs skipped steps', async (t) => {
  const result = await run('step.feature', { name: ['Skipped step'] })
  t.snapshot(result)
})

test.serial('logs undefined steps', async (t) => {
  const result = await run('step.feature', { name: ['Undefined step'] })
  t.snapshot(result)
})
