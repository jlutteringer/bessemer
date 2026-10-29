# TODO

## Improve trait filter semantics

An option only offers a trait if _all_ of the trait's tags are in its filter (`Traits.applyFilter`). Now that spells have
both a rank and a school tag, a filter has to list every school it allows as well as the ranks, so `UpToRank1/2/3` in
`packages/ruleset-dnd5e/src/tag/spell.ts` include all the schools just to keep Spells Known working (the comment at the top of that
file explains this). This gets awkward as traits pick up more tags (it's effectively an OR across all tags rather than
"rank ≤ N AND school = X").

Find a filter model that can express both, e.g. per-dimension constraints.

## 5e ability score cap for fixed feat increases

Feat ability score choices are capped at 20 via a prerequisite, but feats with a fixed +1 to one score (e.g. Actor's Charisma +1) still apply it past 20.

Possible fix: an optional `maximum` expression on characteristics (e.g. a `StrengthMaximum` characteristic that Primal Champion can raise), clamped before set patches so items like the Belt of Giant Strength can still exceed it.

## Fix the context / Bessemer context situation
