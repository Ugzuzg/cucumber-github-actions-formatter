import test from 'ava'

import { run } from './exec'

test.serial('does not log backgrounds', async (t) => {
  const result = await run('background.feature')
  t.snapshot(result)
})
