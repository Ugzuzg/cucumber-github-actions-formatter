import { test } from 'node:test'

import { run } from './exec'

test('logs scenario names', async (t) => {
  const result = await run('scenario.feature', { name: ['Scenario name'] })
  t.assert.snapshot(result)
})

test('logs new lines between scenarios', async (t) => {
  const result = await run('scenario.feature', { name: ['Scenario \\d'] })
  t.assert.snapshot(result)
})
