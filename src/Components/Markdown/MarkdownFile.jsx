import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import DefaultMarkdown from './default.md'

const MarkdownFile = ({inputText = null}) => {

  const [state, setState] = useState(inputText);

  useEffect(() => {
    fetch(inputText ?? DefaultMarkdown).then(res => res.text()).then(text => setState(text));
  });

  return (
    <ReactMarkdown children={state} components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={coldarkDark}
            language={match[1]}
            PreTag="div"
            {...props}
            className={"language"}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}/>
  )
};

export default MarkdownFile;