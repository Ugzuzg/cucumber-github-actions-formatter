import { test } from 'node:test'

import { run } from './exec'

test('log feature tags', async (t) => {
  const result = await run('tag.feature', { name: ['Feature tag'] })
  t.assert.snapshot(result)
})

test('logs scenario tags', async (t) => {
  const result = await run('tag.feature', { name: ['Scenario tag'] })
  t.assert.snapshot(result)
})

test('logs scenario outline tags', async (t) => {
  const result = await run('tag.feature', {
    name: ['Scenario outline tag'],
  })
  t.assert.snapshot(result)
})
