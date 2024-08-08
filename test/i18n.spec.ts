import { test } from 'node:test'

import { run } from './exec'

test('logs French', async (t) => {
  const result = await run('fr.feature', {
    name: ['Nom du Scénario'],
  })
  t.assert.snapshot(result)
})

test('logs Russian', async (t) => {
  const result = await run('ru.feature', { name: ['Сценарий name'] })
  t.assert.snapshot(result)
})
