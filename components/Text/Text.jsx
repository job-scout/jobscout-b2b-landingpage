import React from 'react'
import s from './Text.module.css'
import { cn } from '@/utils'




const Text = ({
  style,
  className = '',
  variant = 'body',
  children,
  html,
  onClick,
}) => {
  const componentsMap = {
    body: 'div',
    heading: 'h1',
    pageHeading: 'h1',
    sectionHeading: 'h2',
    storyHeading: 'h2',
  }

  const Component = componentsMap[variant]

  const htmlContentProps = html
    ? {
      dangerouslySetInnerHTML: { __html: html },
    }
    : {}

  return (
    <Component
      className={cn(
        s.root,
        {
          [s.body]: variant === 'body',
          [s.heading]: variant === 'heading',
          [s.pageHeading]: variant === 'pageHeading',
          [s.sectionHeading]: variant === 'sectionHeading',
          [s.storyHeading]: variant === 'storyHeading',
        },
        className
      )}
      onClick={onClick}
      style={style}
      {...htmlContentProps}
    >
      {children}
    </Component>
  )
}

export default Text
