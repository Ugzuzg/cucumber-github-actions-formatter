import test from 'ava'

import { run } from './exec'

test.serial('does not log hooks', async (t) => {
  const result = await run('hook.feature')
  t.snapshot(result)
})
