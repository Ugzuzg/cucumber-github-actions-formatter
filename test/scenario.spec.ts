import test from 'ava'

import { run } from './exec'

test.serial('logs scenario names', async (t) => {
  const result = await run('scenario.feature', { name: ['Scenario name'] })
  t.snapshot(result)
})

test.serial('logs new lines between scenarios', async (t) => {
  const result = await run('scenario.feature', { name: ['Scenario \\d'] })
  t.snapshot(result)
})
