import { Expression } from '@bessemer/cornerstone/expression'

export enum DurationType {
  Instant = 'Instant',
  Sustained = 'Sustained',
}

export type Duration = { type: DurationType.Instant } | { type: DurationType.Sustained; rounds: Expression<number> }
