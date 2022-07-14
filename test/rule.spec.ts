import test from 'ava'

import { run } from './exec'

test.serial('logs rules', async (t) => {
  const result = await run('rule.feature')
  t.snapshot(result)
})

test.serial('logs background steps in rules', async (t) => {
  const result = await run('rule-background.feature')
  t.snapshot(result)
})

test.serial('offsets the scenario indentation', async (t) => {
  const result = await run('rule*.feature')
  t.snapshot(result)
})
