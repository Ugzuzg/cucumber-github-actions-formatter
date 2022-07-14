import test from 'ava'

import { run } from './exec'

test.serial('log feature tags', async (t) => {
  const result = await run('tag.feature', { name: ['Feature tag'] })
  t.snapshot(result)
})

test.serial('logs scenario tags', async (t) => {
  const result = await run('tag.feature', { name: ['Scenario tag'] })
  t.snapshot(result)
})

test.serial('logs scenario outline tags', async (t) => {
  const result = await run('tag.feature', {
    name: ['Scenario outline tag'],
  })
  t.snapshot(result)
})
