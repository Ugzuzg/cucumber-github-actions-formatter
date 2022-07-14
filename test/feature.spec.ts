import test from 'ava'

import { run } from './exec'

test.serial(
  'logs feature names and inserts new lines between scenarios and features',
  async (t) => {
    const result = await run('*.feature', { name: ['Feature \\d'] })
    t.snapshot(result)
  },
)
