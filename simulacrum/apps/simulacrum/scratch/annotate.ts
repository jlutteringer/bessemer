import * as fs from 'fs'
import { Examples } from './action-model'
import { describeExample } from './describe'

const file = 'scratch/action-model.ts'
const marker = '  // Rendered:'

const findClose = (text: string, open: number): number => {
  let depth = 0
  let quote: string | null = null
  for (let index = open; index < text.length; index++) {
    const char = text[index]!
    if (quote !== null) {
      if (char === '\\') {
        index++
      } else if (char === quote) {
        quote = null
      }
    } else if (char === "'" || char === '"' || char === '`') {
      quote = char
    } else if (char === '{' || char === '[' || char === '(') {
      depth++
    } else if (char === '}' || char === ']' || char === ')') {
      depth--
      if (depth === 0) {
        return index
      }
    }
  }

  throw new Error('Unbalanced brackets')
}

const stripAnnotations = (text: string): string => {
  const lines = text.split('\n')
  const kept: Array<string> = []
  let inAnnotation = false
  for (const line of lines) {
    if (line === marker) {
      inAnnotation = true
      continue
    }

    if (inAnnotation && line.startsWith('  //')) {
      continue
    }

    inAnnotation = false
    kept.push(line)
  }

  return kept.join('\n')
}

const rendered = (name: string): Array<string> => {
  const example = Examples.find((it) => it.name === name)!
  const lines = describeExample(example).split('\n')
  return lines.slice(lines.indexOf('', 3) + 1).filter((line, index, all) => !(line === '' && index === all.length - 1))
}

let text = stripAnnotations(fs.readFileSync(file, 'utf8'))
const examplesStart = text.indexOf('export const Examples')

let cursor = examplesStart
for (const example of Examples) {
  const quoted = [`'${example.name.replace(/'/g, "\\'")}'`, `"${example.name}"`]
    .map((it) => text.indexOf(`name: ${it}`, cursor))
    .filter((it) => it >= 0)
  const at = Math.min(...quoted)
  if (!Number.isFinite(at)) {
    throw new Error(`Could not find ${example.name}`)
  }

  const open = text.lastIndexOf('\n  {', at) + 3
  const close = findClose(text, open)
  const insertAt = text.indexOf('\n', close) + 1
  const comment = [marker, ...rendered(example.name).map((line) => (line === '' ? '  //' : `  // ${line}`))].join('\n') + '\n'
  text = text.slice(0, insertAt) + comment + text.slice(insertAt)
  cursor = insertAt + comment.length
}

fs.writeFileSync(file, text)
