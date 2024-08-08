import { test } from 'node:test'

import { run } from './exec'

test('logs scenario outlines', async (t) => {
  const result = await run('scenario-outline.feature', {
    name: ['Scenario outline'],
  })
  t.assert.snapshot(result)
})
