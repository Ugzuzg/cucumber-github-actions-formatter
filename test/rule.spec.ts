import { test } from 'node:test'

import { run } from './exec'

test('logs rules', async (t) => {
  const result = await run('rule.feature')
  t.assert.snapshot(result)
})

test('logs background steps in rules', async (t) => {
  const result = await run('rule-background.feature')
  t.assert.snapshot(result)
})

test('offsets the scenario indentation', async (t) => {
  const result = await run('rule*.feature')
  t.assert.snapshot(result)
})
