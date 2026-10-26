import { Characteristic, CharacteristicReference } from '@simulacrum/ruleset/characteristic'
import { ActionEffect } from '@simulacrum/ruleset/action-effect'

export enum ActionTestType {
  Attack = 'Attack',
  Save = 'Save',
}

export type ActionTest = {
  offense: CharacteristicReference
  defense: CharacteristicReference
  type: ActionTestType
  success: Array<ActionEffect>
  failure: Array<ActionEffect>
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
    success: props.success ?? [],
    failure: props.failure ?? [],
  }
}
