import { Expression } from '@bessemer/cornerstone/expression'
import { Objects } from '@bessemer/cornerstone'
import * as Archetypes from '@simulacrum/ruleset/archetype'
import { ArchetypeFilter, ArchetypeFilterProps, CreatureArchetype, CreatureArchetypeReference } from '@simulacrum/ruleset/archetype'

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
  archetypes?: ArchetypeFilterProps<CreatureArchetype>
}

export type TargetFilter = {
  archetypes: ArchetypeFilter<CreatureArchetypeReference>
}

export const filter = (props: TargetFilterProps): TargetFilter => {
  return {
    archetypes: Archetypes.filter(props.archetypes ?? []),
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
