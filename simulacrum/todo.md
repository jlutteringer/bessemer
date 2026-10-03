# TODO

## Improve trait filter semantics

An option only offers a trait if _all_ of the trait's archetypes are in its filter (`Traits.applyFilter`). Now that spells have
both a rank and a school archetype, a filter has to list every school it allows as well as the ranks, so `UpToRank1/2/3` in
`packages/ruleset-dnd5e/src/archetype/spell.ts` include all the schools just to keep Spells Known working (the comment at the top of that
file explains this). This gets awkward as traits pick up more archetypes (it's effectively an OR across all archetypes rather than
"rank ≤ N AND school = X").

Find a filter model that can express both, e.g. per-dimension constraints.

## Traits selected more than once

Traits can now be marked `repeatable` (Ability Score Improvement, Skilled, and the feat ability score increases). What's left:

- Ability score increases don't enforce the maximum of 20.

## Fix the context / Bessemer context situation
