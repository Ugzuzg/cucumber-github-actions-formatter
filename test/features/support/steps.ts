import { DataTable, When } from '@cucumber/cucumber'

import { World } from './World'

const noop = () => {}

When('noop', noop)
When('noop {string}', (_: string) => {})
When('ambiguous', noop)
When('ambiguous', noop)
When('failed', () => {
  throw new Error('FAILED')
})
When('passed', noop)
When('pending', () => 'pending')
When('skipped', () => 'skipped')
When('doc string:', (_: string) => {})
When('data table:', (_: DataTable) => {})
When('world', function (this: World) {
  this.someWorldMethod()
})
