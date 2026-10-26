import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import * as Tiptap from '@bessemer/core/tiptap'
import { Duration } from '@simulacrum/ruleset/duration'

export enum ActionEffectType {
  Descriptive = 'Descriptive',
}

export type DescriptiveActionEffect = {
  type: ActionEffectType.Descriptive
  description: RichTextJson
  duration: Duration | null
}

export type ActionEffect = DescriptiveActionEffect

export type ActionEffectOptions = {
  duration?: Duration
}

export const descriptive = (description: string, options?: ActionEffectOptions): DescriptiveActionEffect => {
  return {
    type: ActionEffectType.Descriptive,
    description: Tiptap.markdownToJson(description),
    duration: options?.duration ?? null,
  }
}
