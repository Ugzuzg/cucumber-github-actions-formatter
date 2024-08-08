import { test } from 'node:test'

import { run } from './exec'

test('logs feature descriptions', async (t) => {
  const result = await run('description.feature')
  t.assert.snapshot(result)
})

test('does not log scenario descriptions', async (t) => {
  const result = await run('description.feature')
  t.assert.snapshot(result)
})
