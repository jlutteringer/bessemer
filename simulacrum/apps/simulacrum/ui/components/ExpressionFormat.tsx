'use client'

import * as React from 'react'
import { ReactNode, useContext } from 'react'
import { Expression, Expressions, NumericExpressions, StringExpressions, ArrayExpressions } from '@bessemer/cornerstone/expression'
import { ExpressionMapper } from '@bessemer/cornerstone/expression/expression-mapper'
import {
  AndExpression,
  ContainsExpression,
  EqualsExpression,
  GreaterThanExpression,
  GreaterThanOrEqualExpression,
  LessThanExpression,
  LessThanOrEqualExpression,
  NotExpression,
  OrExpression,
  isValue,
  ValueExpression,
  VariableExpression,
} from '@bessemer/cornerstone/expression/core-expression'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import { RoundingMode } from '@bessemer/cornerstone/math'
import { Maths, Objects } from '@bessemer/cornerstone'
import { RulesetEntityReference } from '@simulacrum/ruleset/ruleset-entity'
import { Ruleset } from '@simulacrum/engine/ruleset'
import { Rulesets } from '@simulacrum/engine'
import { CharacterSheetContext } from '@simulacrum/ui/character/character-sheet-context'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { RulesetEntityPopover } from '@simulacrum/ui/components/RulesetEntityPopover'
import { RuleLinkTrigger } from '@simulacrum/ui/components/SimulacrumRichText'

export type ExpressionRenderContext = {
  ruleset: Ruleset
}

export const ExpressionFormat = ({ expression }: { expression: Expression<unknown> }) => {
  const ruleset = useRuleset()
  const characterContext = useContext(CharacterSheetContext)
  const formula = ExpressionRenderer.map(expression, { ruleset })
  const value = Objects.isNil(characterContext) ? null : Expressions.evaluate(expression, characterContext.expressionContext)

  if (!Maths.isNumber(value) || isValue(expression)) {
    return <>{formula}</>
  }

  return (
    <>
      {value} ({formula})
    </>
  )
}

const ExpressionRenderer = new ExpressionMapper<ReactNode, ExpressionRenderContext>()

const LooseExpressionKeys: Array<string> = [NumericExpressions.SumExpression.expressionKey, AndExpression.expressionKey, OrExpression.expressionKey]

const renderOperand = (expression: Expression<unknown>, map: (expression: Expression<unknown>) => ReactNode): ReactNode => {
  const isLoose = ExpressionInternal.isExpression(expression) && LooseExpressionKeys.includes(expression.expressionKey)
  return isLoose ? <>({map(expression)})</> : map(expression)
}

const renderList = (operands: Array<ReactNode>, separator: ReactNode): ReactNode => {
  return operands.map((it, index) => (
    <React.Fragment key={index}>
      {index > 0 && separator}
      {it}
    </React.Fragment>
  ))
}

const renderFunction = (name: string, operands: Array<ReactNode>): ReactNode => {
  return (
    <>
      {name}({renderList(operands, ', ')})
    </>
  )
}

const renderEntity = (reference: string, context: ExpressionRenderContext): ReactNode => {
  const entity = Rulesets.findEntityById(reference as RulesetEntityReference, context.ruleset)
  if (Objects.isNil(entity)) {
    return reference
  }

  return (
    <RulesetEntityPopover
      entity={entity}
      trigger={<RuleLinkTrigger>{entity.name}</RuleLinkTrigger>}
    />
  )
}

ExpressionRenderer.register(ValueExpression, ({ value }, map, context) => {
  if (Array.isArray(value)) {
    return renderList(
      value.map((it) => map(it)),
      ', '
    )
  }

  if (typeof value === 'string') {
    return renderEntity(value, context)
  }

  return String(value)
})

ExpressionRenderer.register(VariableExpression, ({ name }, map, context) => renderEntity(name, context))

ExpressionRenderer.register(NumericExpressions.SumExpression, ({ operands }, map) => {
  return operands.map((it, index) => {
    const isSubtracted = index > 0 && typeof it === 'number' && it < 0
    return (
      <React.Fragment key={index}>
        {index > 0 && (isSubtracted ? ' − ' : ' + ')}
        {isSubtracted ? Math.abs(it) : map(it)}
      </React.Fragment>
    )
  })
})

ExpressionRenderer.register(NumericExpressions.MultiplyExpression, ({ operands }, map) => {
  return operands.map((it, index) => {
    const divisor = typeof it === 'number' && it > 0 && it < 1 && Number.isInteger(1 / it) ? 1 / it : null
    return (
      <React.Fragment key={index}>
        {index > 0 && (Objects.isPresent(divisor) ? ' / ' : ' × ')}
        {Objects.isPresent(divisor) ? divisor : renderOperand(it, map)}
      </React.Fragment>
    )
  })
})

ExpressionRenderer.register(NumericExpressions.MinExpression, ({ operands }, map) => renderFunction('min', operands.map(map)))

ExpressionRenderer.register(NumericExpressions.MaxExpression, ({ operands }, map) => renderFunction('max', operands.map(map)))

ExpressionRenderer.register(NumericExpressions.BoundExpression, ({ value, bounds }, map) => {
  const [minimum, maximum] = bounds
  if (Objects.isNil(minimum)) {
    return Objects.isNil(maximum) ? map(value) : renderFunction('min', [map(value), map(maximum)])
  }

  if (Objects.isNil(maximum)) {
    return renderFunction('max', [map(value), map(minimum)])
  }

  return renderFunction('clamp', [map(value), map(minimum), map(maximum)])
})

ExpressionRenderer.register(NumericExpressions.RoundExpression, ({ value, roundingMode }, map) => {
  switch (roundingMode) {
    case RoundingMode.Floor:
      return <>⌊{map(value)}⌋</>
    case RoundingMode.Ceiling:
      return <>⌈{map(value)}⌉</>
    default:
      return renderFunction('round', [map(value)])
  }
})

ExpressionRenderer.register(NotExpression, ({ value }, map) => <>not {renderOperand(value, map)}</>)

ExpressionRenderer.register(AndExpression, ({ operands }, map) => renderList(operands.map(map), ' and '))

ExpressionRenderer.register(OrExpression, ({ operands }, map) => renderList(operands.map(map), ' or '))

ExpressionRenderer.register(EqualsExpression, ({ operands }, map) => renderList(operands.map(map), ' = '))

ExpressionRenderer.register(ContainsExpression, ({ collection, operands }, map) => (
  <>
    {map(collection)} include {renderList(operands.map(map), ' and ')}
  </>
))

ExpressionRenderer.register(LessThanExpression, ({ left, right }, map) => (
  <>
    {map(left)} {'<'} {map(right)}
  </>
))

ExpressionRenderer.register(LessThanOrEqualExpression, ({ left, right }, map) => (
  <>
    {map(left)} ≤ {map(right)}
  </>
))

ExpressionRenderer.register(GreaterThanExpression, ({ left, right }, map) => (
  <>
    {map(left)} {'>'} {map(right)}
  </>
))

ExpressionRenderer.register(GreaterThanOrEqualExpression, ({ left, right }, map) => (
  <>
    {map(left)} ≥ {map(right)}
  </>
))

ExpressionRenderer.register(StringExpressions.ConcatenateExpression, ({ first, second }, map) => renderFunction('concat', [map(first), map(second)]))

ExpressionRenderer.register(StringExpressions.SubstringExpression, ({ string, substring }, map) =>
  renderFunction('substring', [map(string), map(substring)])
)

ExpressionRenderer.register(StringExpressions.UppercaseExpression, ({ value }, map) => renderFunction('uppercase', [map(value)]))

ExpressionRenderer.register(ArrayExpressions.ConcatenateExpression, ({ operands }, map) => renderFunction('concat', operands.map(map)))

ExpressionRenderer.register(ArrayExpressions.FirstExpression, ({ operands }, map) => renderFunction('first', operands.map(map)))
