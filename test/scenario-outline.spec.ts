import test from 'ava'

import { run } from './exec'

test.serial('logs scenario outlines', async (t) => {
  const result = await run('scenario-outline.feature', {
    name: ['Scenario outline'],
  })
  t.snapshot(result)
})
