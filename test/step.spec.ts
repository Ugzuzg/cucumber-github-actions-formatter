import { test } from 'node:test'
import { join } from 'path'

import { run } from './exec'

test('logs steps', async (t) => {
  const result = await run('step.feature', { name: ['Step name'] })
  t.assert.snapshot(result)
})

test('warns about ambiguous steps', async (t) => {
  const result = await run('step.feature', { name: ['Ambiguous step'] })
  t.assert.snapshot(result)
})

test('warns about failed steps', async (t) => {
  const result = await run('step.feature', { name: ['Failed step'] })
  t.assert.snapshot(result.replaceAll(join(__dirname, '../'), ''))
})

test('warns about failed steps with retries', async (t) => {
  const result = await run('step.feature', { name: ['Failed step'], retry: 1 })
  t.assert.snapshot(result.replaceAll(join(__dirname, '../'), ''))
})

test('logs passed steps', async (t) => {
  const result = await run('step.feature', { name: ['Passed step'] })
  t.assert.snapshot(result)
})

test('logs pending steps', async (t) => {
  const result = await run('step.feature', { name: ['Pending step'] })
  t.assert.snapshot(result)
})

test('logs skipped steps', async (t) => {
  const result = await run('step.feature', { name: ['Skipped step'] })
  t.assert.snapshot(result)
})

test('logs undefined steps', async (t) => {
  const result = await run('step.feature', { name: ['Undefined step'] })
  t.assert.snapshot(result)
})
