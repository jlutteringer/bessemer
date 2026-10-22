import { ReactNode, useMemo } from 'react'
import { RichTextElement, RichTextElementProps, RichTextRenderer, RichTextRendererProps } from '@bessemer/react/component/RichTextRenderer'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { Dictionary } from '@bessemer/cornerstone/types'
import { Objects } from '@bessemer/cornerstone'
import {
  Box,
  Chip,
  Divider,
  Link,
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Code } from '@mui/icons-material'

export const DocTextElement: RichTextElement = (props) => <>{props.children}</>

export type RichTextMark = NonNullable<RichTextJson['marks']>[number]

export type RichTextMarkElement = (props: { mark: RichTextMark; children?: ReactNode }) => ReactNode

export const DefaultMarkHandlers: Dictionary<RichTextMarkElement> = {
  bold: ({ children }) => <strong>{children}</strong>,
  italic: ({ children }) => <em>{children}</em>,
  strike: ({ children }) => <del>{children}</del>,
  underline: ({ children }) => <u>{children}</u>,
  code: ({ children }) => <code>{children}</code>,
  link: ({ mark, children }) => <Link href={mark.attrs?.href || ''}>{children}</Link>,
}

export const TextTextElement = ({ content, marks }: RichTextElementProps & { marks?: Dictionary<RichTextMarkElement> }) => {
  return (
    <span>
      {(content.marks ?? []).reduceRight((wrapped: ReactNode, mark) => {
        const Mark = marks?.[mark.type] ?? DefaultMarkHandlers[mark.type]
        return Objects.isNil(Mark) ? wrapped : <Mark mark={mark}>{wrapped}</Mark>
      }, content.text)}
    </span>
  )
}

const paragraph: RichTextElement = (props) => {
  return (
    <Typography
      variant="body1"
      sx={{ '&:not(:last-child)': { mb: 1 } }}
    >
      {props.children}
    </Typography>
  )
}

const heading: RichTextElement = (props) => {
  const level = props.content.attrs?.level || 1
  return <Typography variant={`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}>{props.children}</Typography>
}

const bulletList: RichTextElement = (props) => {
  return <List sx={{ listStyleType: 'disc', pl: 4 }}>{props.children}</List>
}

const orderedList: RichTextElement = (props) => {
  return (
    <List
      component="ol"
      sx={{ listStyleType: 'decimal', pl: 4 }}
    >
      {props.children}
    </List>
  )
}

const listItem: RichTextElement = (props) => {
  return <ListItem sx={{ display: 'list-item', py: 0.25, px: 0 }}>{props.children}</ListItem>
}

const horizontalRule: RichTextElement = () => {
  return <Divider sx={{ my: 4 }} />
}

export const HardBreakTextElement: RichTextElement = () => {
  return <br />
}

const blockquote: RichTextElement = (props) => {
  return (
    <Typography
      component="blockquote"
      sx={{
        borderLeft: 4,
        borderColor: 'grey.300',
        pl: 4,
        py: 2,
        my: 4,
      }}
    >
      {props.children}
    </Typography>
  )
}

const codeBlock: RichTextElement = (props) => {
  const language = props.content.attrs?.language || ''

  return (
    <Typography
      component="pre"
      sx={{
        bgcolor: 'grey.100',
        p: 4,
        borderRadius: 1,
        overflow: 'auto',
        fontFamily: 'monospace',
      }}
    >
      <Code sx={{ mr: 2 }} />
      <code className={language ? `language-${language}` : ''}>{props.children}</code>
    </Typography>
  )
}

const img: RichTextElement = (props) => {
  const { src, alt, title } = props.content.attrs ?? {}
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      title={title}
      sx={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  )
}

const mention: RichTextElement = (props) => {
  return (
    <Chip
      label={props.content.attrs?.label || props.content.attrs?.id}
      size="small"
      sx={{ mx: 0.5 }}
    />
  )
}

const table: RichTextElement = (props) => {
  const rows = Array.isArray(props.children) ? props.children : [props.children]
  const firstRow = props.content.content?.[0]
  const hasHeader = Objects.isPresent(firstRow) && (firstRow.content ?? []).every((cell) => cell.type === 'tableHeader')

  return (
    <TableContainer
      component={Paper}
      sx={{ my: 2 }}
    >
      <Table size="small">
        {hasHeader && <TableHead>{rows[0]}</TableHead>}
        <TableBody>{hasHeader ? rows.slice(1) : rows}</TableBody>
      </Table>
    </TableContainer>
  )
}

const tableRow: RichTextElement = (props) => {
  return <TableRow>{props.children}</TableRow>
}

const tableCell: RichTextElement = (props) => {
  return <TableCell align={props.content.attrs?.align ?? 'left'}>{props.children}</TableCell>
}

const tableHeader: RichTextElement = (props) => {
  return (
    <TableCell
      variant="head"
      align={props.content.attrs?.align ?? 'left'}
    >
      {props.children}
    </TableCell>
  )
}

const defaultHandlers: Dictionary<RichTextElement> = {
  doc: DocTextElement,
  paragraph,
  text: TextTextElement,
  heading,
  bulletList,
  orderedList,
  listItem,
  horizontalRule,
  hardBreak: HardBreakTextElement,
  blockquote,
  codeBlock,
  img,
  mention,
  table,
  tableRow,
  tableCell,
  tableHeader,
}

export const MuiRichTextRenderer = ({ content, handlers }: RichTextRendererProps): ReactNode => {
  const mergedHandlers = useMemo(() => {
    return Objects.deepMerge(defaultHandlers, handlers)
  }, [handlers])

  return (
    <RichTextRenderer
      content={content}
      handlers={mergedHandlers}
    />
  )
}
