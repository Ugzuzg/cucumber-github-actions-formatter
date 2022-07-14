import test from 'ava'

import { run } from './exec'

test.serial('logs French', async (t) => {
  const result = await run('fr.feature', {
    name: ['Nom du Scénario'],
  })
  t.snapshot(result)
})

test.serial('logs Russian', async (t) => {
  const result = await run('ru.feature', { name: ['Сценарий name'] })
  t.snapshot(result)
})
