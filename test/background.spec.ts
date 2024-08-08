import { test } from 'node:test'

import { run } from './exec'

test('does not log backgrounds', async (t) => {
  const result = await run('background.feature')
  t.assert.snapshot(result)
})
