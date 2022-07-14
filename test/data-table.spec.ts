import test from 'ava'

import { run } from './exec'

test.serial('logs data tables', async (t) => {
  const result = await run('data-table.feature')
  t.snapshot(result)
})
