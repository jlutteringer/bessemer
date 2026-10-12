import { Expression } from '@bessemer/cornerstone/expression'
import { Objects } from '@bessemer/cornerstone'

export type Range = Expression<number>

export enum AreaShape {
  Cone = 'Cone',
  Cube = 'Cube',
  Cylinder = 'Cylinder',
  Line = 'Line',
  Sphere = 'Sphere',
}

export type Area =
  | { type: AreaShape.Cone; length: Expression<number> }
  | { type: AreaShape.Cube; size: Expression<number> }
  | { type: AreaShape.Cylinder; radius: Expression<number>; height: Expression<number> }
  | { type: AreaShape.Line; length: Expression<number>; width: Expression<number> }
  | { type: AreaShape.Sphere; radius: Expression<number> }

export type TargetSelection = {
  from: string | null
  range: Range
  area: Area | null
  count: Expression<number>
}

export type Targeting = Record<string, TargetSelection>

export type TargetSelectionProps = {
  from?: string
  range: Range
  area?: Area
  count: Expression<number>
}

export type TargetingProps = Record<string, TargetSelectionProps>

export const resolve = (props: TargetingProps): Targeting => {
  return Objects.mapValues(props, (it) => ({ from: it.from ?? null, range: it.range, area: it.area ?? null, count: it.count }))
}
