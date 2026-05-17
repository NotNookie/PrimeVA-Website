import React from 'react'
import logoSvgRaw from '@/assets/logo.svg?raw'

type Props = {
  width?: number
  height?: number
  className?: string
  // primaryColor applies to the first traced path group (PRIME)
  primaryColor?: string
  // secondaryColor applies to the second traced path group (VA)
  secondaryColor?: string
}

// Inline the traced SVG (paths) for pixel-perfect rendering.
export function PrimeLogo({
  width,
  height,
  className,
  primaryColor = '#000',
  secondaryColor = '#000',
}: Props) {
  // Ensure svg scales and remove nested width/height on groups
  let svg = logoSvgRaw
  svg = svg.replace(/<svg([^>]*)>/, '<svg$1 width="100%" height="100%" preserveAspectRatio="xMidYMid meet">')
  svg = svg.replace(/<g([^>]*)width="[^"]+"([^>]*)>/g, '<g$1$2>')
  svg = svg.replace(/<g([^>]*)height="[^"]+"([^>]*)>/g, '<g$1$2>')

  // Replace the first two occurrences of fill="black" with primary/secondary colors
  svg = svg.replace(/fill="black"/, `fill="${primaryColor}"`)
  svg = svg.replace(/fill="black"/, `fill="${secondaryColor}"`)

  const style = width && height
    ? { display: 'inline-block', width, height, lineHeight: 0 }
    : { display: 'inline-block', height: '100%', lineHeight: 0 }

  return (
    <span
      className={className}
      style={style}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export default PrimeLogo
