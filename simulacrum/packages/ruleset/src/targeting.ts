import { Expression } from '@bessemer/cornerstone/expression'
import { Objects } from '@bessemer/cornerstone'
import * as Tags from '@simulacrum/ruleset/tag'
import { TagFilter, TagFilterProps, CreatureTag, CreatureTagReference } from '@simulacrum/ruleset/tag'

export type Range = Expression<number>

export type DistanceUnit = {
  singular: string
  plural: string
}

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
  filter: TargetFilter
}

export type Targeting = Record<string, TargetSelection>

export type TargetSelectionProps = {
  from?: string
  range: Range
  area?: Area
  count: Expression<number>
  filter?: TargetFilterProps
}

export type TargetingProps = Record<string, TargetSelectionProps>

export type TargetFilterProps = {
  tags?: TagFilterProps<CreatureTag>
}

export type TargetFilter = {
  tags: TagFilter<CreatureTagReference>
}

export const filter = (props: TargetFilterProps): TargetFilter => {
  return {
    tags: Tags.filter(props.tags ?? []),
  }
}

export const resolve = (props: TargetingProps): Targeting => {
  return Objects.mapValues(props, (it) => ({
    from: it.from ?? null,
    range: it.range,
    area: it.area ?? null,
    count: it.count,
    filter: filter(it.filter ?? {}),
  }))
}
