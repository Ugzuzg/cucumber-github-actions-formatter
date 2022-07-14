import test from 'ava'

import { run } from './exec'

test.serial('logs empty run summaries', async (t) => {
  const result = await run('feature.feature', { tags: '@empty' })
  t.snapshot(result)
})

test.serial('logs summaries after a new line', async (t) => {
  const result = await run('feature.feature', { name: ['Feature name'] })
  t.snapshot(result)
})
