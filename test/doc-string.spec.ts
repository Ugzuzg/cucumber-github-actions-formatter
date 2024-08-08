import { test } from 'node:test'

import { run } from './exec'

test('logs doc strings', async (t) => {
  const result = await run('doc-string.feature')
  t.assert.snapshot(result)
})

test('preserves doc string indentation', async (t) => {
  const result = await run('doc-string.feature')
  t.assert.snapshot(result)
})
