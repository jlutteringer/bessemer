import { Characteristic, CharacteristicReference } from '@simulacrum/ruleset/characteristic'
import { ActionEffect } from '@simulacrum/ruleset/action-effect'
import { Valued } from '@simulacrum/ruleset/attribute'
import * as Attributes from '@simulacrum/ruleset/attribute'

export enum ActionTestType {
  Attack = 'Attack',
  Save = 'Save',
}

export interface ActionTest {
  offense: CharacteristicReference
  defense: CharacteristicReference
  type: ActionTestType
  success: Array<Valued<ActionEffect>>
  failure: Array<Valued<ActionEffect>>
}

export type ActionTestProps = {
  offense: Characteristic
  defense: Characteristic
  type?: ActionTestType
  success?: Array<ActionEffect>
  failure?: Array<ActionEffect>
}

export const resolve = (props: ActionTestProps): ActionTest => {
  return {
    offense: props.offense.id,
    defense: props.defense.id,
    type: props.type ?? ActionTestType.Attack,
    success: (props.success ?? []).map(Attributes.valued),
    failure: (props.failure ?? []).map(Attributes.valued),
  }
}
