import test from 'ava'

import { run } from './exec'

test.serial('logs doc strings', async (t) => {
  const result = await run('doc-string.feature')
  t.snapshot(result)
})

test.serial('preserves doc string indentation', async (t) => {
  const result = await run('doc-string.feature')
  t.snapshot(result)
})
