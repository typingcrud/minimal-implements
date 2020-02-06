import React from 'react'

interface OwnProps {
  codeComment: string[]
  typingRow: number
}

type Props = OwnProps

export const GameComment: React.FC<Props> = props => {
  const preStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'top',
    color: 'gray',
  }

  const styleNum: React.CSSProperties = {
    display: 'inline-block',
    textAlign: 'right',
    minWidth: '60px',
    color: 'gray'
  }

  const typingRowStyle = (index: number):React.CSSProperties => {
    if (props.typingRow === index) {
      return { color: 'white' }
    } else {
      return {}
    }
  }

  const jsxElem = (cr: string, line: string, index: number) => (
    <React.Fragment key={index}>
      <span style={styleNum}>{1 + index + "   "}</span>
      <span style={typingRowStyle(index)}>{line + cr}</span>
    </React.Fragment>
  )

  const mappingFunc = (line: string, index: number, arr: string[]) => {
    return arr.length-1 === index ? jsxElem('', line, index) : jsxElem('\n', line, index)
  }

  return (
    <pre style={preStyle}>
      { props.codeComment.map((v, i, a) => mappingFunc(v, i, a)) }
    </pre>
  )
}
