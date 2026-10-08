import { Expression } from '@bessemer/cornerstone/expression'

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
