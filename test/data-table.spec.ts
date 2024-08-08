import { test } from 'node:test'

import { run } from './exec'

test('logs data tables', async (t) => {
  const result = await run('data-table.feature')
  t.assert.snapshot(result)
})
