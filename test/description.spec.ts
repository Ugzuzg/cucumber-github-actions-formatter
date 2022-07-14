import test from 'ava'

import { run } from './exec'

test.serial('logs feature descriptions', async (t) => {
  const result = await run('description.feature')
  t.snapshot(result)
})

test.serial('does not log scenario descriptions', async (t) => {
  const result = await run('description.feature')
  t.snapshot(result)
})
