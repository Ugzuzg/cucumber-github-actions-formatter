import { test } from 'node:test'

import { run } from './exec'

test('logs empty run summaries', async (t) => {
  const result = await run('feature.feature', { tags: '@empty' })
  t.assert.snapshot(result)
})

test('logs summaries after a new line', async (t) => {
  const result = await run('feature.feature', { name: ['Feature name'] })
  t.assert.snapshot(result)
})
