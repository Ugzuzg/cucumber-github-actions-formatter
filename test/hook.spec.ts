import { test } from 'node:test'

import { run } from './exec'

test('does not log hooks', async (t) => {
  const result = await run('hook.feature')
  t.assert.snapshot(result)
})
