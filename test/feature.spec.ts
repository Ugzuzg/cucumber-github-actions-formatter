import { test } from 'node:test'

import { run } from './exec'

test('logs feature names and inserts new lines between scenarios and features', async (t) => {
  const result = await run('*.feature', { name: ['Feature \\d'] })
  t.assert.snapshot(result)
})
