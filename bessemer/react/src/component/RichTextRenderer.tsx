import { ReactNode } from 'react'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { Dictionary } from '@bessemer/cornerstone/types'

export type RichTextRendererProps = { content: RichTextJson; handlers?: Dictionary<RichTextElement> }

export type RichTextElementProps = {
  children?: ReactNode
  content: RichTextJson
}

export type RichTextElement = (props: RichTextElementProps) => ReactNode

const MarkOrder = ['link', 'code', 'bold', 'italic', 'underline', 'strike']

const sortMarks = (content: RichTextJson): RichTextJson => {
  if (Objects.isNil(content.marks)) {
    return content
  }

  return { ...content, marks: Arrays.sortBy(content.marks, (it) => MarkOrder.indexOf(it.type)) }
}

export const RichTextRenderer = (props: RichTextRendererProps): ReactNode => {
  const { content, handlers = {} } = props

  const children: Array<ReactNode> = []
  if (Objects.isPresent(content.content)) {
    content.content.forEach((child, index) => {
      children.push(
        <RichTextRenderer
          content={child}
          handlers={handlers}
          key={`${child.type}-${index}`}
        />
      )
    })
  }

  if (Objects.isNil(content.type) || !(content.type in handlers)) {
    throw new Error(`Unable to resolve content type: ${content?.type}`)
  }

  const Handler = handlers[content.type]!
  return <Handler content={sortMarks(content)}>{children}</Handler>
}
