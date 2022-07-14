import {
  Status,
  Formatter,
  IFormatterOptions,
  formatterHelpers,
} from '@cucumber/cucumber'
import * as messages from '@cucumber/messages'
import { EOL as n } from 'os'

const { GherkinDocumentParser, PickleParser } = formatterHelpers
const { getGherkinStepMap } = GherkinDocumentParser
const { getPickleStepMap } = PickleParser

const types = {
  [Status.UNDEFINED]: 'warning',
  [Status.FAILED]: 'error',
  [Status.AMBIGUOUS]: 'warning',
  [Status.UNKNOWN]: null,
  [Status.SKIPPED]: null,
  [Status.PASSED]: null,
  [Status.PENDING]: null,
}

export default class GitHubActionsFormatter extends Formatter {
  constructor(options: IFormatterOptions) {
    super(options)
    this.parseEnvelope = this.parseEnvelope.bind(this)

    options.eventBroadcaster.on('envelope', this.parseEnvelope)
  }

  private parseEnvelope(envelope: messages.Envelope) {
    if (envelope.testStepFinished)
      this.onTestStepFinished(envelope.testStepFinished)
  }

  private onTestStepFinished(testStepFinished: messages.TestStepFinished) {
    const { message, status } = testStepFinished.testStepResult || {}
    if (types[status]) {
      const {
        gherkinDocument,
        pickle,
        testCase,
      } = this.eventDataCollector.getTestCaseAttempt(
        testStepFinished.testCaseStartedId || '',
      )

      const location = (() => {
        const pickleStepMap = getPickleStepMap(pickle)
        const gherkinStepMap = getGherkinStepMap(gherkinDocument)
        const testStep = testCase.testSteps?.find?.(
          (item) => item.id === testStepFinished.testStepId,
        )

        if (testStep && testStep.pickleStepId) {
          const pickleStep = pickleStepMap[testStep.pickleStepId]
          const astNodeId = pickleStep.astNodeIds[0]
          const gherkinStep = gherkinStepMap[astNodeId]
          return gherkinStep.location
        }
        return { line: 1, column: 1 }
      })()

      const m = (() => {
        if (!message && status === Status.UNDEFINED)
          return 'Undefined step definition'
        return message || 'Unknown error'
      })()

      const me = `${n}::${types[status]} file=${escapeProperty(
        gherkinDocument.uri,
      )},line=${location.line},col=${location.column}::${escapeData(m)}`
      this.log(me)
    }
  }
}

function escapeData(s = ''): string {
  return s.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A')
}

function escapeProperty(s = ''): string {
  return s
    .replace(/%/g, '%25')
    .replace(/\r/g, '%0D')
    .replace(/\n/g, '%0A')
    .replace(/:/g, '%3A')
    .replace(/,/g, '%2C')
}
