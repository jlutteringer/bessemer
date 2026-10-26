import { Router } from 'express'
import { Objects } from '@bessemer/cornerstone'
import { RulesetExtensionReference, RulesetReference } from '@simulacrum/ruleset/ruleset'
import { RulesetService } from '@simulacrum/api/ruleset/ruleset-service'
import { RulesetProjections } from '@simulacrum/api/ruleset/ruleset-projections'

export const RulesetRouter = Router()

const parseExtensionIds = (value: unknown): Array<RulesetExtensionReference> | null => {
  if (Objects.isNil(value)) {
    return null
  }

  return [value]
    .flat()
    .flatMap((it) => `${it}`.split(','))
    .filter((it) => it !== '')
    .map((it) => it as RulesetExtensionReference)
}

RulesetRouter.get('/rulesets', (_request, response) => {
  response.json(RulesetService.listRulesets().map((it) => RulesetProjections.projectRulesetSummary(it, RulesetService.getAvailableExtensions(it))))
})

RulesetRouter.get('/rulesets/:rulesetId', (request, response) => {
  const ruleset = RulesetService.findRuleset(request.params.rulesetId as RulesetReference)
  if (Objects.isNil(ruleset)) {
    response.status(404).json({ error: 'ruleset_not_found' })
    return
  }

  const availableExtensionIds = RulesetService.getAvailableExtensions(ruleset).map((it) => it.id)
  const extensionIds = parseExtensionIds(request.query.extensions) ?? availableExtensionIds
  if (extensionIds.some((it) => !availableExtensionIds.includes(it))) {
    response.status(400).json({ error: 'invalid_extensions' })
    return
  }

  response.json(RulesetService.resolveRuleset(ruleset, extensionIds))
})
